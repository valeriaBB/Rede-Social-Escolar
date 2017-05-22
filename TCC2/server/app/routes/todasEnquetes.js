module.exports = function (app) {
    var api = app.api.todasEnquetes;
 
    //enquete
    app.route('/todasEnquetes')
        .get(api.lista);
};