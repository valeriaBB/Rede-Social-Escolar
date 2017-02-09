var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

var api = {}
var model = mongoose.model('Empresa');
var modelUsuario = mongoose.model('Usuario');


api.lista = function (req, res) {
    model
        .find({ ativo: true })
        .then(function (empresas) {
            res.json(empresas);
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

api.buscaPorId = function (req, res) {
    model
        .find({ _id: req.params.id, ativo: true })
        .then(function (empresa) {
            if (!empresa) throw Error('Empresa não encontrada');
            res.json(empresa[0]);
        }, function (error) {
            console.log(error);
            res.status(404).json(error);
        });
};

api.removePorId = function (req, res) {
    model
        .findByIdAndUpdate(req.params.id, { ativo: false })
        .then(function (empresa) {
            res.status(200).json();
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

// api.buscaContabilidadeUsuario = function (login) {
//     return modelUsuario.findOne({ email: login });
// }


api.adiciona = function (req, res) {
    var c = req.body;
    c["ativo"] = true;
    // api.buscaContabilidadeUsuario(req.usuario.login).then(user => {
    //     c.id_contabilidade = user.id_contabilidade;

        model
            .create(c)
            .then(function (empresa) {
                res.json(empresa);
                console.log(c);
            }, function (error) {
                console.log(error);
                res.status(500).json(error);
            });
    //});
};

api.atualiza = function (req, res) {
    model
        .findByIdAndUpdate(req.body._id, req.body)
        .then(function (empresa) {
            res.json(empresa);
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

module.exports = api;