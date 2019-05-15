var path = require('path');
var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

var staticPath = path.join(__dirname, '/app');
app.use(express.static(staticPath));

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.listen(3000, function() {
  console.log('listening on port 3000');
});
