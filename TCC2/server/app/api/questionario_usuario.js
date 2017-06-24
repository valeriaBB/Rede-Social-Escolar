var mongoose = require('mongoose');
var api = {}
var model = mongoose.model('Questionario_usuario');

api.adiciona = function (req, res) {
    var c = req.body;
    c["ativo"] = true;
    model
        .create(c)
        .then(function (questionario_usuario) {
            res.json(questionario_usuario);
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

api.lista = function (req, res) {
    model
        .find({ativo: true, id_questionario: req.params.id})
        .then(function (turmas) {
            res.json(turmas);
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

api.buscaPorId = function (req, res) {
    var ids = req.params.id.split(",");
    usuario = ids[0];
    questionario = ids[1];
    model
        .find({ id_usuario: usuario,
                id_questionario: questionario })
        .then(function (questionario_usuario) {
            if (!questionario_usuario[0]){
                var resposta = {
                    respondido: false
                }
                console.log(resposta.respondido);
                res.json(resposta.respondido);
            }else {
                var resposta = {
                    respondido: true
                }
                console.log(resposta.respondido);
                res.json(resposta.respondido);
            }
        }, function (error) {
            console.log(error);
            res.status(404).json(error);
        });
};

api.removePorId = function (req, res) {
};

api.atualiza = function (c) {
};

module.exports = api;