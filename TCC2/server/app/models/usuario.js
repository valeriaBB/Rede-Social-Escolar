var mongoose = require('mongoose');

var usuarioSchema = mongoose.Schema({

    nome: {
        type: String,
        required: false
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
        required: false
    },
    idade: {
        type: Number,
        required: false
    },
    id_escola: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Escola',
        required: false
    },
    id_professor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Professor',
        required: false
    },
    id_aluno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Aluno',
        required: false
    },
    id_responsavel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Responsavel',
        required: false
    }
});

var model = mongoose.model('Usuario', usuarioSchema, 'Usuario', false);

module.exports = model;