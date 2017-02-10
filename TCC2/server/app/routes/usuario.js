module.exports = function (app) {
    var api = app.api.usuario;
 
    //Usuario
    app.route('/usuario')
        .get(api.lista)
        .post(api.adiciona)
        .put(api.atualiza);

    app.route('/usuario/:id')
        .get(api.buscaPorId)
        .delete(api.removePorId);

};