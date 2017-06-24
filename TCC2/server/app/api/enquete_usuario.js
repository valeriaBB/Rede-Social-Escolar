var mongoose = require('mongoose');
var api = {}
var model = mongoose.model('Enquete_usuario');
var modelEnquete = mongoose.model('Enquete');

api.buscaTotalEnquete = function (id_enquete) {
    return modelEnquete.findById({ _id: id_enquete });
}

api.adiciona = function (req, res) {
    var c = req.body;
    if (c["resposta1"] == true) {
        var total = 0;
        api.buscaTotalEnquete(req.body.id_enquete).then(enquete => {
            total = enquete.resp1 + 1;
            modelEnquete
                .findByIdAndUpdate(req.body.id_enquete, { resp1: total })
                .then(function (enquete) {
                    res.json(enquete);
                }, function (error) {
                    console.log(error);
                    res.status(500).json(error);
                });
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
    } else if (c["resposta2"] == true) {
        var total = 0;
        api.buscaTotalEnquete(req.body.id_enquete).then(enquete => {
            total = enquete.resp2 + 1;
            modelEnquete
                .findByIdAndUpdate(req.body.id_enquete, { resp2: total })
                .then(function (enquete) {
                    res.json(enquete);
                }, function (error) {
                    console.log(error);
                    res.status(500).json(error);
                });
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
    } else if (c["resposta3"] == true) {
        var total = 0;
        api.buscaTotalEnquete(req.body.id_enquete).then(enquete => {
            total = enquete.resp3 + 1;
            modelEnquete
                .findByIdAndUpdate(req.body.id_enquete, { resp3: total })
                .then(function (enquete) {
                    res.json(enquete);
                }, function (error) {
                    console.log(error);
                    res.status(500).json(error);
                });
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
    } else if (c["resposta4"] == true) {
        var total = 0;
        api.buscaTotalEnquete(req.body.id_enquete).then(enquete => {
            total = enquete.resp4 + 1;
            modelEnquete
                .findByIdAndUpdate(req.body.id_enquete, { resp4: total })
                .then(function (enquete) {
                    res.json(enquete);
                }, function (error) {
                    console.log(error);
                    res.status(500).json(error);
                });
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
    } else if (c["resposta5"] == true) {
        var total = 0;
        api.buscaTotalEnquete(req.body.id_enquete).then(enquete => {
            total = enquete.resp5 + 1;
            modelEnquete
                .findByIdAndUpdate(req.body.id_enquete, { resp5: total })
                .then(function (enquete) {
                    res.json(enquete);
                }, function (error) {
                    console.log(error);
                    res.status(500).json(error);
                });
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
    }
    model
        .create(c)
        .then(function (enquete_usuario) {
            res.json(enquete_usuario);
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
};

api.lista = function (req, res) {
};

api.buscaPorId = function (req, res) {
    var ids = req.params.id.split(",");
    usuario = ids[0];
    enquete = ids[1];
    model
        .find({ id_usuario: usuario,
                id_enquete: enquete })
        .then(function (enquete_usuario) {
            if (!enquete_usuario[0]){
                var resposta = {
                    respondido: false
                }
                res.json(resposta.respondido);
            }else {
                res(true);
            }
        }, function (error) {
            console.log(error);
            res.status(404).json(error);
        });
};

api.removePorId = function (req, res) {
};

api.atualiza = function (c) {
};

module.exports = api;