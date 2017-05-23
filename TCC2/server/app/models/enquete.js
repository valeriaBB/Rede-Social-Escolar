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
    },
    id_criador: {
        type: String,
        required: false
    },
    resp1: {
        type: Number,
        required: false
    },
    resp2: {
        type: Number,
        required: false
    },
    resp3: {
        type: Number,
        required: false
    },
    resp4: {
        type: Number,
        required: false
    },
    resp5: {
        type: Number,
        required: false
    }
});

mongoose.model('Enquete', schema, 'Enquete', false);

