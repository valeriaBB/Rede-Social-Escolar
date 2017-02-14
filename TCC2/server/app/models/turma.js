var mongoose = require('mongoose');

var schema = mongoose.Schema({

    nome: {
        type: String,
        required: true
    },
    serie: {
        type: String,
        required: true
    },
    ativo: {
        type: Boolean,
        required: false
    },
});

mongoose.model('Turma', schema, 'Turma', false);

