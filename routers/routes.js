var express = require("express");
var router = express.Router();
// 스키마 구조를 가져오기 위해서 require
var User = require("../models/contactModel");
var List = require("../models/listModel");

router.get("/", function (req, res) {
  //   res.send("Hello SeoCho!!");
  // res.render("index", { name: "이윤호" });
  return res.json({ message: "Hello World" });
});

router.post("/signup", function (req, res, next) {
  // console.log(req.body);

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      return next(err);
    } else if (user) {
      return res.send("이미 사용된 이메일 입니다.");
    } else {
      var contact = new User();

      contact.name = req.body.name;
      contact.password = req.body.password;
      contact.email = req.body.email;
      contact.gender = req.body.gender;
      contact.phone = req.body.phone;

      contact.save(async function (err) {
        if (err) {
          res.json(err);
        } else {
          res.json({
            message: "success",
            data: contact,
          });
        }
      });
    }
  });
});

router.post("/login", function (req, res, next) {
  var id = req.body.id;
  var password = req.body.password;

  User.findOne({ email: id }, function (err, user) {
    if (err) return next(err);
    else if (!user) return res.send("User not founded");
    else {
      if (user.password != password) {
        res.send("password is invalid");
      } else {
        console.log(user);
        res.send(`Welcome to my world ${user.name}!!!!!`);
      }
    }
  });
});

router.get("/list", (req, res, next) => {
  res.render("inputLists");
});

router.post("/list", (req, res, next) => {
  // console.log(req.body);
  var boardContents = new List();

  boardContents.title = req.body.title;
  boardContents.contents = req.body.contents;
  boardContents.author = req.body.author;

  boardContents.save((err) => {
    if (err) return next(err);
    else return res.json(boardContents);
  });
});

router.get("/contents", (req, res, next) => {
  List.find((err, data) => {
    if (err) return next(err);
    else return res.json(data);
  });
});

//exports해야 인식된다.
module.exports = router;
