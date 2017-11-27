var express = require('express');
var app = express();
var path    = require("path");
var connect = require('connect');
var sassMiddleware = require('node-sass-middleware')

app.use(
  sassMiddleware({
    src: __dirname + '/public/sass' //where the sass files are
    , dest: __dirname + '/public'
    , debug: true
  })
);

app.use(express.static('public'));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
