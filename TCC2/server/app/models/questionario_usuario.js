var mongoose = require('mongoose');

var schema = mongoose.Schema({
    id_questionario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Questionario',
        required: false
    },
    id_usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },
    nome: {
        type:String,
        required: false
    },
    resposta1: {
        type: String,
        required: false
    },
    resposta2: {
        type: String,
        required: false
    },
    resposta3: {
        type: String,
        required: false
    },
    resposta4: {
        type: String,
        required: false
    },
    resposta5: {
        type: String,
        required: false
    }
});

mongoose.model('Questionario_usuario', schema, 'Questionario_usuario', false);

