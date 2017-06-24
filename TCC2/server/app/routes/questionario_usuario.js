module.exports = function (app) {
    var api = app.api.questionario_usuario;
 
    //enquete
    app.route('/questionario_usuario')
        .get(api.lista)
        .post(api.adiciona)
        .put(api.atualiza);

    app.route('/questionario_usuario/:id')
        //.get(api.buscaPorId)
        .get(api.lista)
        .delete(api.removePorId);

};