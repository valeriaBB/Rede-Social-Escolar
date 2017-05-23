var mongoose = require('mongoose');
var modelEscola = mongoose.model('Escola');
var api = {}
var model = mongoose.model('Questionario');
var modelEnqueteUsuario = mongoose.model('Questionario_usuario');
var usuarioModel = require('./usuario');
var enqueteUsuarioModel = require('./questionario_usuario');
var modelUsuario = mongoose.model('Usuario');

api.lista = function (req, res) {
    modelUsuario.findOne({ email: req.usuario.login }).then(escola => {
        if (escola) {
            model
                .find({ ativo: true, id_escola: escola.id_escola }).populate("id_escola")
                .then(function (questionarios) {
                    res.json(questionarios);
                }, function (error) {
                    console.log(error);
                    res.status(500).json(error);
                });
        } else {
            console.log("Escola o qual o questionário pertence não foi encontrado!");
        }
    })
};

module.exports = api;