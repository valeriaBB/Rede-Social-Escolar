module.exports = function (app) {
    var api = app.api.questionario;
 
    //questionario
    app.route('/questionario')
        .get(api.lista)
        .post(api.adiciona)
        .put(api.atualiza);

    app.route('/questionario/:id')
        .get(api.buscaPorId)
        .delete(api.removePorId);

};