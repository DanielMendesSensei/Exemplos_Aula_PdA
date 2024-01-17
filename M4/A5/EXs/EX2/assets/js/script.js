// CRIANDO SERVIDOR LOCAL DA FORMA BRUTA
var http = require("http");

http.createServer(function(req, res){
    res.end("I'm Alive!")
}).listen(4000)

console.log("Server ON!")