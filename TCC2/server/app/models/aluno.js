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
    telefone: {
        type: String,
        required: true
    },
    ativo: {
        type: Boolean,
        required: false
    },
});

mongoose.model('Aluno', schema, 'Aluno', false);

