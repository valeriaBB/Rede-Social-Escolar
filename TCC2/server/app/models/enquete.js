var mongoose = require('mongoose');

var schema = mongoose.Schema({

    nome: {
        type: String,
        required: true
    },
    pergunta: {
        type: String,
        required: true
    },
    ativo: {
        type: Boolean,
        required: false
    },
});

mongoose.model('Enquete', schema, 'Enquete', false);

