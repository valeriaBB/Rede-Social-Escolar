var mongoose = require('mongoose');
var usuarioModel = require('./usuario');
var modelUsuario = mongoose.model('Usuario');
var api = {}
var model = mongoose.model('Aluno');

api.lista = function (req, res) {
    model
        .find({ ativo: true })
        .then(function (alunos) {
            res.json(alunos);
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

api.buscaPorId = function (req, res) {
    model
        .find({ _id: req.params.id, ativo: true })
        .then(function (aluno) {
            if (!aluno) throw Error('Aluno não encontrado');
            res.json(aluno[0]);
        }, function (error) {
            console.log(error);
            res.status(404).json(error);
        });
};

api.removePorId = function (req, res) {

    model
        .findByIdAndUpdate(req.params.id, { ativo: false })
        .then(function (aluno) {
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
        .then(function (aluno) {
            usuarioModel.adiciona({
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha,
                id_aluno: aluno._id,
                tipo: 4
            }).then(usu => {
                res.json(aluno);
            });
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

api.atualiza = function (req, res) {
    model
        .findByIdAndUpdate(req.body._id, req.body)
        .then(function (aluno) {
            res.json(aluno);
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

module.exports = api;