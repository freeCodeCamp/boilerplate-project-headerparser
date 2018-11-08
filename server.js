// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var useragent = require('express-useragent');

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204
app.use(useragent.express());
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));


// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/whoami", function (req, res) {
  var ipAddress = req.ip;
  var language = req.acceptsLanguages();
  var software = "OS: " + req.useragent.os + ", Browser: " + req.useragent.browser;
 
  
  res.json({
    "ipadress": ipAddress,
    "language": language,
    "software": software
    });
});
