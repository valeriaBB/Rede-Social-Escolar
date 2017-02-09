var http = require('http');
var app =  require('./config/express');
var t = require('./config/database')('mongodb://localhost/tcc2');


http.createServer(app).listen(3000, function (){
    console.log('Servidor Iniciado');
});
