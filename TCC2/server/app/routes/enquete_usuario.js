module.exports = function (app) {
    var api = app.api.enquete_usuario;
 
    //enquete
    app.route('/enquete_usuario')
        .get(api.lista)
        .post(api.adiciona)
        .put(api.atualiza);

    app.route('/enquete_usuario/:id')
        .get(api.buscaPorId)
        .delete(api.removePorId);

};