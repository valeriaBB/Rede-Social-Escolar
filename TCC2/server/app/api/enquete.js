var mongoose = require('mongoose');


var api = {}
var model = mongoose.model('Enquete');

api.lista = function (req, res) {
    model
        .find({ ativo: true })
        .then(function (enquetes) {
            res.json(enquetes);
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

api.buscaPorId = function (req, res) {
    model
        .find({ _id: req.params.id, ativo: true })
        .then(function (enquete) {
            if (!enquete) throw Error('Enquete não encontrada');
            res.json(enquete[0]);
        }, function (error) {
            console.log(error);
            res.status(404).json(error);
        });
};

api.removePorId = function (req, res) {

    model
        .findByIdAndUpdate(req.params.id, { ativo: false })
        .then(function (enquete) {
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
        .then(function (enquete) {
            res.json(enquete);
            console.log(c);
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

api.atualiza = function (req, res) {
    model
        .findByIdAndUpdate(req.body._id, req.body)
        .then(function (enquete) {
            res.json(enquete);
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

module.exports = api;