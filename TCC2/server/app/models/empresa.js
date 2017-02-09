var mongoose = require('mongoose');

var empresaSchema = mongoose.Schema({

    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
     telefone: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    ativo: {
        type: Boolean,
        required: true
    }
    // id_contabilidade: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true
    // },
    // nomeContabilidade:{
    //     type: String,
    //     required: false
    // }
});

mongoose.model('Empresa', empresaSchema, 'Empresa', false);

