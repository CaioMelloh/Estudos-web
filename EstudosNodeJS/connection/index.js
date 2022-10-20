var http = require("http");

console.log("Conexão realizada");

http.createServer((req, resp) => {
    resp.end("<h1>Say hello!</h1>");
}).listen("8012");