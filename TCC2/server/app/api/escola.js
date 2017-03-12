var mongoose = require('mongoose');


var api = {}
var model = mongoose.model('Escola');

api.lista = function (req, res) {
    model
        .find({ ativo: true })
        .then(function (escolas) {
            res.json(escolas);
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

api.buscaPorId = function (req, res) {
    model
        .find({ _id: req.params.id, ativo: true })
        .then(function (escola) {
            if (!escola) throw Error('Escola não encontrada');
            res.json(escola[0]);
        }, function (error) {
            console.log(error);
            res.status(404).json(error);
        });
};

api.removePorId = function (req, res) {

    model
        .findByIdAndUpdate(req.params.id, { ativo: false })
        .then(function (escola) {
            res.status(200).json();
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

// api.adiciona = function (req, res) {

//     console.log(req.body);
//     var c = req.body;
//     c["ativo"] = true;
//     model
//         .create(c)
//         .then(function (escola) {
//             res.json(escola);
//             console.log(c);
//         }, function (error) {
//             console.log(error);
//             res.status(500).json(error);
//         });
// };

api.adiciona = function (req, res) {
    console.log(req.body);
    var c = req.body;
    c["ativo"] = true;
    model
        .create(c)
        .then(function (escola) {

            usuarioModel.adiciona({
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha,
                id_escola: escola._id,
                tipo: 2
            }).then(usu => {
                res.json(escola);
            });
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

api.atualiza = function (req, res) {
    model
        .findByIdAndUpdate(req.body._id, req.body)
        .then(function (escola) {
            res.json(escola);
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

module.exports = api;