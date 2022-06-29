// index.js
// where your node app starts

// init project
require("dotenv").config();
var express = require("express");
var app = express();
var requestIp = require("request-ip");

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

app.get("/api/whoami", (req, res) => {
  // console.log(req.info.remoteAddress);
  const headerIp = req.headers["user-agent"].split("/'");
  console.log(req.headers["user-agent"]);
  console.log(headerIp);
  res.json({
    // i: headerIp,
    // ipAddress: req.ip,
    // ip: req.socket.remoteAddress,
    // p: req.socket.localAddress,
    r: req.headers["x-forwarded-for"].split(",", 1).toString(),
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
