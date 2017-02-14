module.exports = function (app) {
    var api = app.api.enquete;
 
    //enquete
    app.route('/enquete')
        .get(api.lista)
        .post(api.adiciona)
        .put(api.atualiza);

    app.route('/enquete/:id')
        .get(api.buscaPorId)
        .delete(api.removePorId);

};