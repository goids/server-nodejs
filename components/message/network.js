const express = require('express');

const controller = require('./controller');
const response = require('../../network/response');

const router = express.Router();

router.get('/', function(req, res){
    res.header({
        "custom-header": "custom value by Diego"
    });

    controller.getMessage()
        .then( (messageList) => {
            response.success(req, res, messageList);
        })
        .catch( e => response.error(req, res, 'No hay mensajes', 400, e));

});

router.post('/', function(req, res){
    // console.log(req.query);
    // console.log(req.body);
    controller.addMessage(req.body.user, req.body.message)
        .then( (fullMesagge) => {
            response.success(req, res, fullMesagge, 201);
        })
        .catch( e => {
            response.error(req, res, 'Información invalida', 400, 'Error de conexion de base de datos');
        });
});

router.put('/', function(req, res){
    response.success(req, res, "Se ha actualizado el mensaje");
});

router.delete('/', function(req, res){
    res.header({
        "eliminar": "eliminando mensaje"
    });
    response.success(req, res, "Mensaje eliminado")
})

module.exports = router;