

var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var model = require('../models/usuario');
module.exports = function (app) {

    var api = {}
    var model = mongoose.model('Usuario');

    api.autentica = function (req, res) {
        console.log('entrei no autentica no servidor');
        console.log(req.body);
        model
            .findOne({ email: req.body.email, senha: req.body.senha })
            .then(function (usuario) {
                if (!usuario) {
                    console.log('Login ou senha invalidos - Voce não esta no banco de dados');
                    res.sendStatus(401);
                } else {
                    var token = jwt.sign({ login: usuario.email }, app.get('secret'), { expiresIn: 84600 });
                    res.set('x-access-token', token);

                    res.json({
                        _id: usuario._id,
                        nome: usuario.nome,
                        email: usuario.email,
                        tipo: usuario.tipo
                    });
                    res.next();
                }
            }, function (error) {
                console.log('Login ou senha invalidos - tente novamente');
                res.sendStatus(401);
            });

    };

     api.autenticaRelogin = function (req, res) {
        model
            .findOne({ email: req.body.user.email, senha: req.body.user.senha })
            .then(function (usuario) {
                if (!usuario) {
                    console.log('Login ou senha invalidos - Voce não esta no banco de dados');
                    res.sendStatus(401);
                } else {
                    var token = jwt.sign({ login: usuario.email }, app.get('secret'), { expiresIn: 84600 });
                    res.set('x-access-token', token);
                    res.json({
                        _id: usuario._id,
                        nome: usuario.nome,
                        email: usuario.email,
                        tipo: usuario.tipo
                    });
                    res.next();
                }
            }, function (error) {
                console.log('Login ou senha invalidos - tente novamente');
                res.sendStatus(401);
            });
    };

    api.verificaToken = function (req, res, next) {

        console.log('entrou no verifica TOKEN!');

        var token = req.headers['x-access-token'];

        if (token) {
            console.log('Verificando token .............');
            jwt.verify(token, app.get('secret'), function (err, decoded) {
                if (err) {
                    console.log('Token rejeitado');
                    res.sendStatus(401);
                }
                req.usuario = decoded;
                next();
            });

        } else if (req.url.indexOf("/api") >= 0) {
            console.log('Token não enviado');
            res.sendStatus(401);
        } else {
            next();
        }
    };

    return api;

};



