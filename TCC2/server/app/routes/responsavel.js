module.exports = function (app) {
    var api = app.api.responsavel;
 
    //responsavel
    app.route('/responsavel')
        .get(api.lista)
        .post(api.adiciona)
        .put(api.atualiza);

    app.route('/responsavel/:id')
        .get(api.buscaPorId)
        .delete(api.removePorId);

};