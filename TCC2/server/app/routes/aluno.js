module.exports = function (app) {
    var api = app.api.aluno;
 
    app.route('/aluno')
        .get(api.lista)
        .post(api.adiciona)
        .put(api.atualiza);

    app.route('/aluno/:id')
        .get(api.buscaPorId)
        .delete(api.removePorId);
};

