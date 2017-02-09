var mongoose = require('mongoose');


var api = {}
var model = mongoose.model('Usuario');

api.lista = function (req, res) {
    model
        .find({ ativo: true })
        .then(function (usuarios) {
            res.json(usuarios);
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

api.buscaPorId = function (req, res) {
    model
        .find({ _id: req.params.id, ativo: true })
        .then(function (usuario) {
            if (!usuario) throw Error('Usuario não encontrado');
            res.json(usuario[0]);
        }, function (error) {
            console.log(error);
            res.status(404).json(error);
        });
};

api.removePorId = function (req, res) {

    model
        .findByIdAndUpdate(req.params.id, { ativo: false })
        .then(function (usuario) {
            res.status(200).json();
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

api.adiciona = function (req, res) {

    console.log(req.body);
    var c = req.body;
    c["ativo"] = true;
    model
        .create(c)
        .then(function (usuario) {
            res.json(usuario);
            console.log(c);
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

api.atualiza = function (req, res) {
    model
        .findByIdAndUpdate(req.body._id, req.body)
        .then(function (usuario) {
            res.json(usuario);
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

module.exports = api;