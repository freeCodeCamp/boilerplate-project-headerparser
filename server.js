// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

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
  var trimedIpAddress = ipAddress.replace(/[A-Za-z]|:/g, '');
  
  var language = req.headers["accept-language"];
  var trimedLanguage = language.slice(0, language.indexOf(','));
  
  var software = req.headers["user-agent"];
  var start = software.indexOf('\(');
  var end= software.indexOf('\)');
  var trimedSoftware = software.slice(start + 1, end);
  
  res.json({
    "ipadress": trimedIpAddress,
    "language": trimedLanguage,
    "software": trimedSoftware
    });
});
