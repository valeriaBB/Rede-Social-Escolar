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
    console.log("entrouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu");
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
};

api.removePorId = function (req, res) {
};

api.atualiza = function (c) {
};

module.exports = api;