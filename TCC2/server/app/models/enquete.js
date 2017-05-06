var mongoose = require('mongoose');

var schema = mongoose.Schema({

    nome_enquete: {
        type: String,
        required: true
    },

    pergunta: {
        type:String,
        required: true
    },

    alternativa1: [{
        titulo: String,
        resposta: String
    }],

    alternativa2: [{
        titulo: String,
        resposta: String
    }],

    alternativa3: [{
        titulo: String,
        resposta: String
    }],

    alternativa4: [{
        titulo: String,
        resposta: String
    }],

    alternativa5: [{
        titulo: String,
        resposta: String
    }],
    ativo: {
        type: Boolean,
        required: false
    },
    id_escola: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Escola',
        required: true
    },
     respondem: [{
        aluno: Boolean,
        professor:Boolean,
        responsavel:Boolean,
        diretor_escola: Boolean
    }]

});

mongoose.model('Enquete', schema, 'Enquete', false);

