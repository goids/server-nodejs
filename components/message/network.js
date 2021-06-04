const express = require('express');

const controller = require('./controller');
const response = require('../../network/response');

const router = express.Router();

router.get('/', function(req, res){
    const filterMessage = req.query.user || null;

    res.header({
        "custom-header": "custom value by Diego"
    });

    controller.getMessage(filterMessage)
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

router.patch('/:id', function(req, res){
    controller.updateMessage(req.params.id, req.body.message)
        .then( data => {
            response.success(req, res, data, 200);
        }).catch( e => {
            response.error(req, res, 'Error interno', 500, e);
        })
})

router.put('/', function(req, res){
    response.success(req, res, "Se ha actualizado el mensaje");
});

router.delete('/:id', function(req, res){
    res.header({
        "eliminar": "eliminando mensaje"
    });
    controller.deleteMessage(req.params.id)
        .then( () => response.success(req, res, `Mensage ${req.params.id} eliminado`))
        .catch ( e => response.error(req, res, 'Error interno', 500, e));
});

module.exports = router;