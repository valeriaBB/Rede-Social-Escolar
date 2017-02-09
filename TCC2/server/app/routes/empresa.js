module.exports = function (app) {
    var api = app.api.empresa;
 
    app.route('/empresa')
        .get(api.lista)
        .post(api.adiciona)
        .put(api.atualiza);

    app.route('/empresa/:id')
        .get(api.buscaPorId)
        .delete(api.removePorId);

};