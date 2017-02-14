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
});

mongoose.model('Questionario', schema, 'Questionario', false);

