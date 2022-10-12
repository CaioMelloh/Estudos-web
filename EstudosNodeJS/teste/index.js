var http = require('http');

http.createServer(function(req, resp){resp.end("<h1> Eai, pessoal </h1>")}).listen(8081);