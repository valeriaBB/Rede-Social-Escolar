var mongoose = require('mongoose');

var schema = mongoose.Schema({

    nome: {
        type: String,
        required: true
    },
    ativo: {
        type: Boolean,
        required: false
    },
    pergunta1: {
        type: String,
        required: true
    },
    pergunta2: {
        type: String,
        required: true
    },
    pergunta3: {
        type: String,
        required: false
    },
    pergunta4: {
        type: String,
        required: false
    },
    pergunta5: {
        type: String,
        required: false
    },
    professor: {
        type: Boolean,
        required: false
    },
    aluno: {
        type: Boolean,
        required: false
    },
    responsavel: {
        type: Boolean,
        required: false
    },
    escola: {
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
    },
    resp1: {
        type: String,
        required: false
    },
    resp2: {
        type: String,
        required: false
    },
    resp3: {
        type: String,
        required: false
    },
    resp4: {
        type: String,
        required: false
    },
    resp5: {
        type: String,
        required: false
    }
});

mongoose.model('Questionario', schema, 'Questionario', false);

