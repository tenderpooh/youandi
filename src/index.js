var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", function(req, res) {
  res.write("hello World!");
  res.end();
});

app.listen(8080);
