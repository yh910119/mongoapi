var express = require("express");
var mongoose = require("mongoose");
require("dotenv").config();
// .하나는 형제폴더 ..는 부모폴더
var apiRouter = require("./routers/routes");
var app = express();
var path = require("path");
var cors = require("cors");
var bodyParser = require("body-parser");

app.set("views", path.resolve(__dirname + "/views"));
// console.log(path.resolve(__dirname + "/views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

//use로 미들웨어로 등록
app.use("/api", apiRouter);
app.use(cors());

var mongo_url = process.env.MONGO_URL;
mongoose.connect(mongo_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;

if (!db) {
  console.log("Error Connecting db");
} else {
  console.log("DB Connected Success");
}

var port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log(`server is Starting at http://localhost:${port}`);
});
