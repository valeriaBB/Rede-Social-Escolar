var mongoose = require('mongoose');

var schema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    pergunta: {
        type:String,
        required: true
    },
    alternativa1: {
        type: String,
        required: true
    },
    alternativa2: {
        type: String,
        required: true
    },
    alternativa3: {
        type: String,
        required: false
    },
    alternativa4: {
        type: String,
        required: false
    },
    alternativa5: {
        type: String,
        required: false
    },
    resposta1: {
        type: Boolean,
        required: false
    },
    resposta2: {
        type: Boolean,
        required: false
    },
    resposta3: {
        type: Boolean,
        required: false
    },
    resposta4: {
        type: Boolean,
        required: false
    },
    resposta5: {
        type: Boolean,
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

mongoose.model('Enquete', schema, 'Enquete', false);

