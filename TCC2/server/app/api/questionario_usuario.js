var mongoose = require('mongoose');
var api = {}
var model = mongoose.model('Questionario_usuario');

api.adiciona = function (req, res) {
    var c = req.body;
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
};

api.buscaPorId = function (req, res) {
};

api.removePorId = function (req, res) {
};

api.atualiza = function (c) {
};

module.exports = api;