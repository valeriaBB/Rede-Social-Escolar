var mongoose = require('mongoose');
var usuarioModel = require('./usuario');
var modelUsuario = mongoose.model('Usuario');
var api = {}
var model = mongoose.model('Responsavel');

api.lista = function (req, res) {
    model
        .find({ ativo: true })
        .then(function (responsaveis) {
            res.json(responsaveis);
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

api.buscaPorId = function (req, res) {
    model
        .find({ _id: req.params.id, ativo: true })
        .then(function (responsavel) {
            if (!responsavel) throw Error('Responsavel não encontrado');
            res.json(responsavel[0]);
        }, function (error) {
            console.log(error);
            res.status(404).json(error);
        });
};

api.removePorId = function (req, res) {
    model
        .findByIdAndUpdate(req.params.id, { ativo: false })
        .then(function (responsavel) {
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
       .then(function (responsavel) {
            usuarioModel.adiciona({
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha,
                id_responsavel: responsavel._id,
                tipo: 5
            }).then(usu => {
                res.json(responsavel);
            });
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

api.atualiza = function (req, res) {
    model
        .findByIdAndUpdate(req.body._id, req.body)
        .then(function (responsavel) {
            res.json(responsavel);
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

module.exports = api;