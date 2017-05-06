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
    id_responsavel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Responsavel',
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
    id_escola: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Escola',
        required: false
    }
});

mongoose.model('Aluno', schema, 'Aluno', false);

