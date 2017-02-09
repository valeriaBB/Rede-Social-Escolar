var mongoose = require('mongoose');

var usuarioSchema = mongoose.Schema({

    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    tipo: {
        type: Number,
        required: true
    }
});

var model = mongoose.model('Usuario', usuarioSchema, 'Usuario', false);

module.exports = model;