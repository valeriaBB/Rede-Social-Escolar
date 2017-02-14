module.exports = function (app) {
    var api = app.api.turma;
 
    //turma
    app.route('/turma')
        .get(api.lista)
        .post(api.adiciona)
        .put(api.atualiza);

    app.route('/turma/:id')
        .get(api.buscaPorId)
        .delete(api.removePorId);

};