var mongoose = require('mongoose');
var usuarioModel = require('./usuario');
var modelUsuario = mongoose.model('Usuario');
var api = {}
var model = mongoose.model('Aluno');
var modelEscola = mongoose.model('Escola');

api.lista = function (req, res) {
    modelUsuario.findOne({ email: req.usuario.login }).then(usuario => {
        if (usuario) {
            model
                .find({ ativo: true, id_escola: usuario.id_escola }).populate("id_escola")
                .then(function (alunos) {
                    res.json(alunos);
                }, function (error) {
                    console.log(error);
                    res.status(500).json(error);
                });
        } else {
            console.log("Usuário não encontrado!");
        }
    })
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

api.buscaEscolaUsuario = function (login) {
    return modelUsuario.findOne({ email: login });
}

api.adiciona = function (req, res) {
    console.log(req.body);
    var c = req.body;
    c["ativo"] = true;

    api.buscaEscolaUsuario(req.usuario.login).then(user => {
        c.id_escola = user.id_escola;
        model
            .create(c)
            .then(function (aluno) {
                usuarioModel.adiciona({
                    nome: req.body.nome,
                    email: req.body.email,
                    senha: req.body.senha,
                    id_aluno: aluno._id,
                    id_escola: req.body.id_escola,
                    tipo: 4
                }).then(usu => {
                    res.json(aluno);
                });
            }, function (error) {
                console.log(error);
                res.status(500).json(error);
            });
    })
};

api.atualiza = function (req, res) {
    model
        .findByIdAndUpdate(req.body._id, req.body)
        .then(function (aluno) {
            modelUsuario.findOne({ id_professor: professor._id}).then(usu => {
                usu.email = aluno.email;
                usu.nome = aluno.nome;
                usu.senha = aluno.senha;
                modelUsuario.update({_id: usu._id}, usu).then(abc =>{
                     res.json(aluno);
                })
            })
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

module.exports = api;