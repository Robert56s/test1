const express = require('express');
const path = require('path');
const fs = require('fs')
const https = require('https')

const app = express();
const port = 443;

const httpsOptions = {
  key: fs.readFileSync(`cert/my.key`),
  cert: fs.readFileSync(`cert/my.crt`)
}

const server = https.createServer(httpsOptions, app);

app.use(express.static(path.join(__dirname, 'public')));

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

server.listen(port);
console.log(`Server started`);