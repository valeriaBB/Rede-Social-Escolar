var mongoose = require('mongoose');
var modelEscola = mongoose.model('Escola');
var api = {}
var model = mongoose.model('Enquete');
var modelEnqueteUsuario = mongoose.model('Enquete_usuario');
var usuarioModel = require('./usuario');
var enqueteUsuarioModel = require('./enquete_usuario');
var modelUsuario = mongoose.model('Usuario');

api.lista = function (req, res) {
    modelUsuario.findOne({ email: req.usuario.login }).then(escola => {
        if (escola) {
            model
                .find({ ativo: true, id_escola: escola.id_escola }).populate("id_escola")
                .then(function (enquetes) {
                    res.json(enquetes);
                }, function (error) {
                    console.log(error);
                    res.status(500).json(error);
                });
        } else {
            console.log("Escola a qual a enquete pertence não foi encontrada!");
        }
    })
};



module.exports = api;