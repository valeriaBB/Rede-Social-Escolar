var mongoose = require('mongoose');
var usuarioModel = require('./usuario');
var modelUsuario = mongoose.model('Usuario');
var api = {}
var model = mongoose.model('Professor');
var modelEscola = mongoose.model('Escola');

api.lista = function (req, res) {
    modelUsuario.findOne({ email: req.usuario.login }).then(usuario => {
        if (usuario) {
            model
                .find({ ativo: true, id_escola: usuario.id_escola }).populate("id_escola")
                .then(function (professores) {
                    res.json(professores);
                }, function (error) {
                    console.log(error);
                    res.status(500).json(error);
                })
        } else {
            console.log("Usuário não encontrado!");
        }
    })
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

api.buscaEscolaUsuario = function (login) {
    return modelUsuario.findOne({ email: login });
}

api.adiciona = function (req, res) {
    var c = req.body;
    c["ativo"] = true;

    api.buscaEscolaUsuario(req.usuario.login).then(user => {
        c.id_escola = user.id_escola;
        model
            .create(c)
            .then(function (professor) {
                usuarioModel.adiciona({
                    nome: req.body.nome,
                    email: req.body.email,
                    senha: req.body.senha,
                    id_professor: professor._id,
                    id_escola: req.body.id_escola,
                    tipo: 3
                }).then(usu => {
                    res.json(professor);
                });
            }, function (error) {
                console.log(error);
                res.status(500).json(error);
            });
    });
};

api.atualiza = function (req, res) {
    model
        .findByIdAndUpdate(req.body._id, req.body)
        .then(function (professor) {

            modelUsuario.findOne({ id_professor: professor._id}).then(usu =>{
                usu.email = professor.email;
                usu.nome = professor.nome;
                usu.senha = professor.senha;
                modelUsuario.update({_id: usu._id}, usu).then(abc =>{
                    res.json(professor);
                })
            })
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

module.exports = api;