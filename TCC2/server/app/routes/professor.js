module.exports = function (app) {
    var api = app.api.professor;
 
    //professor
    app.route('/professor')
        .get(api.lista)
        .post(api.adiciona)
        .put(api.atualiza);

    app.route('/professor/:id')
        .get(api.buscaPorId)
        .delete(api.removePorId);

};