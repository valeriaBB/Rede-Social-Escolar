var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('secret', 'umafrasequalquer');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'accept, authorization, content-type, x-requested-with, x-access-token');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('access-control-expose-headers', 'x-access-token');
    next();
});
app.use(express.static('./public'));
app.use(express.static('./app/front'));


//app.use(validador({}));

consign({ cwd: 'app' })
    .include('models')
    .then('api')
    .then('auth/autentica.js') // aqui eu garanto que de todos os modulos, o autentica será carregado primeiro
    .then('routes/escola.js')
    .then('routes/professor.js')
    .then('routes/aluno.js')
    .then('routes/responsavel.js')
    .then('routes/disciplina.js')
    .then('routes/enquete.js')
    .then('routes/todasEnquetes.js')
    .then('routes/todosQuestionarios.js')
    .then('routes/enquete_usuario.js')
    .then('routes/questionario_usuario.js')
    .then('routes/questionario.js')
    .then('routes/turma.js')
    .then('routes/usuario.js')
   // .then('routes')
    .into(app);



module.exports = app;