var express = require("express");
//express 전달받고 또다른 express에게 전달해준다.
var mongoose = require("mongoose");
require("dotenv").config();

var app = express();
//.listen보단 var app로

app.use(express.urlencoded({ extended: false }));

var url = process.env.MONGO_URL;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", function (request, response) {
  console.log(request.IncomingMessage);
  response.send("Hello World!!!!!!!");
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log(`Server is Starting at http://localhost:${port}`);
});
//서버 띄우기
