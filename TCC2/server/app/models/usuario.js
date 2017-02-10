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
    ativo: {
        type: Boolean,
        required: false
    },
    tipo: {
        type: Number,
        required: true
    },
     formacao: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    id_escola: {
        type: mongoose.Schema.Types.ObjectId,
        required: false

    },
    id_responsavel: {
        type: mongoose.Schema.Types.ObjectId,
        required: false

    },
      id_disciplina: {
        type: mongoose.Schema.Types.ObjectId,
        required: false

    }
});

var model = mongoose.model('Usuario', usuarioSchema, 'Usuario', false);

module.exports = model;