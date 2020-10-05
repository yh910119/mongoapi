var express = require("express");
//express 전달받고 또다른 express에게 전달해준다.
var mongoose = require("mongoose");
require("dotenv").config();
var apiRouter = require("./routers/routes");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
//.listen보단 var app로
app.set("views", path.resolve(__dirname + "/views"));
//console.log(__dirname);
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
//미들웨어
app.use(bodyParser.json());
app.use("/api", apiRouter);

var url = process.env.MONGO_URL;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log(`Server is Starting at http://localhost:${port}`);
});
//서버 띄우기
