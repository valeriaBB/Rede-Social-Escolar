module.exports = function (app) {
    var api = app.api.escola;
 
    //Escola
    app.route('/escola')
        .get(api.lista)
        .post(api.adiciona)
        .put(api.atualiza);

    app.route('/escola/:id')
        .get(api.buscaPorId)
        .delete(api.removePorId);

};