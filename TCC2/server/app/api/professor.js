var mongoose = require('mongoose');
var usuarioModel = require('./usuario');
var modelUsuario = mongoose.model('Usuario');
var api = {}
var model = mongoose.model('Professor');

api.lista = function (req, res) {
    model
        .find({ ativo: true })
        .then(function (professores) {
            res.json(professores);
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

api.buscaPorId = function (req, res) {
    model
        .find({ _id: req.params.id, ativo: true })
        .then(function (professor) {
            if (!professor) throw Error('Professor não encontrado');
            res.json(professor[0]);
        }, function (error) {
            console.log(error);
            res.status(404).json(error);
        });
};

api.removePorId = function (req, res) {

    model
        .findByIdAndUpdate(req.params.id, { ativo: false })
        .then(function (professor) {
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
        .then(function (professor) {
            usuarioModel.adiciona({
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha,
                id_professor: professor._id,
                tipo: 3
            }).then(usu => {
                res.json(professor);
            });
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

api.atualiza = function (req, res) {
    model
        .findByIdAndUpdate(req.body._id, req.body)
        .then(function (professor) {
            res.json(professor);
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

module.exports = api;