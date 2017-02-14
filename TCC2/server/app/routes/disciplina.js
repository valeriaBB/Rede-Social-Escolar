module.exports = function (app) {
    var api = app.api.disciplina;
 
    //disciplina
    app.route('/disciplina')
        .get(api.lista)
        .post(api.adiciona)
        .put(api.atualiza);

    app.route('/disciplina/:id')
        .get(api.buscaPorId)
        .delete(api.removePorId);

};