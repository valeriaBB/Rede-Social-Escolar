module.exports = function (app) {

    var apiAutentica = app.api.autentica;

    //LOGIN
    app.route('/autenticar')
        .post(apiAutentica.autentica);

    app.route('/*')
        .delete(apiAutentica.verificaToken)
        .get(apiAutentica.verificaToken)
        .put(apiAutentica.verificaToken)
        .post(apiAutentica.verificaToken);

    app.route('/autenticar')
        .put(apiAutentica.autenticaRelogin);
};