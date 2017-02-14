var mongoose = require('mongoose');


var api = {}
var model = mongoose.model('Turma');

api.lista = function (req, res) {
    model
        .find({ ativo: true })
        .then(function (turmas) {
            res.json(turmas);
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

api.buscaPorId = function (req, res) {
    model
        .find({ _id: req.params.id, ativo: true })
        .then(function (turma) {
            if (!turma) throw Error('Turma não encontrada');
            res.json(turma[0]);
        }, function (error) {
            console.log(error);
            res.status(404).json(error);
        });
};

api.removePorId = function (req, res) {

    model
        .findByIdAndUpdate(req.params.id, { ativo: false })
        .then(function (turma) {
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
        .then(function (turma) {
            res.json(turma);
            console.log(c);
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

api.atualiza = function (req, res) {
    model
        .findByIdAndUpdate(req.body._id, req.body)
        .then(function (turma) {
            res.json(turma);
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

module.exports = api;