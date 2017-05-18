var mongoose = require('mongoose');

var schema = mongoose.Schema({
    id_enquete: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Enquete',
        required: false
    },
    id_usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },
    pergunta: {
        type:String,
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
    }
});

mongoose.model('Enquete_usuario', schema, 'Enquete_usuario', false);

