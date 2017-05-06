var mongoose = require('mongoose');

var schema = mongoose.Schema({

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
        ref: 'Escola',
        required: false
    },
    id_aluno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Aluno',
        required: false
    },
    telefone: {
        type: String,
        required: true
    },
    ativo: {
        type: Boolean,
        required: false
    },
});

mongoose.model('Responsavel', schema, 'Responsavel', false);

