require('dotenv').config();
var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/api/whoami', (req, res)=>{
  const ipaddress = req.headers.host
  const language = req.headers["accept-language"]
  const software = req.headers["user-agent"]

  res.json({
    ipaddress,
    language,
    software
  })
})

// listen for requests :)
var listener = app.listen(PORT, function () {
  console.log(`Server is running on http://localhost:${PORT}`);
});
