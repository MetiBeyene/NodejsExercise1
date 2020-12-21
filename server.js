var finalhandler = require('finalhandler')
var http         = require('http')
var Router       = require('router')

var app = Router()

app.get('/about', function (req, res) {
    res.end('about');
  });

  app.get('/', function (req, res) {
  res.end('index');
});

app.get('*', function (req, res) {
  res.end('404');
});

var server = http.createServer(function(req, res) {
    app(req, res, finalhandler(req, res))
  })

server.listen(8000, function () {
  console.log('Listening to Port 8000');
});