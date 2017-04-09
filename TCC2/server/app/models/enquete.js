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
        resposta: Boolean
    }],

    alternativa2: [{
        titulo: String,
        resposta: Boolean
    }],

    alternativa3: [{
        titulo: String,
        resposta: Boolean
    }],

    alternativa4: [{
        titulo: String,
        resposta: Boolean
    }],

    alternativa5: [{
        titulo: String,
        resposta: Boolean
    }],
   
    ativo: {
        type: Boolean,
        required: false
    },

    respondem: [{
        aluno: Boolean,
        professor:Boolean,
        responsavel:Boolean,
        diretor_escola: Boolean
    }]
});

mongoose.model('Enquete', schema, 'Enquete', false);

