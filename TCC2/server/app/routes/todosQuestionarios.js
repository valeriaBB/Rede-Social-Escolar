module.exports = function (app) {
    var api = app.api.todosQuestionarios;
 
    //enquete
    app.route('/todosQuestionarios')
        .get(api.lista);
};