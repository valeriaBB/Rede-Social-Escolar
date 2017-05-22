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
    telefone: {
        type: String,
        required: true
    },
    ativo: {
        type: Boolean,
        required: false
    },
    id_escola: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Escola',
        required: false
    },
    id_criador: {
        type: String,
        required: false
    }
});

mongoose.model('Professor', schema, 'Professor', false);

