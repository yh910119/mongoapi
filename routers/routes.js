var express = require("express");
var router = express.Router();
//var router = require('express').Router   <== 이런식으로 쓰는게 더 낫다.
var User = require("../models/contactModel");

router.get("/", function (req, res) {
  //res.send("Hello SeoCho!!");
  res.render("index", { name: "이윤호" });
});

router.post("/signup", function (req, res) {
  console.log(req.body);
  res.send("success");
});

module.exports = router;
