const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', function(req, res){
    controller.getUser()
        .then( users => response.success(req, res, users, 200))
        .catch( e => response.error(req,res, 'Error get data', 500, e))
});

router.post('/', function(req, res){
    controller.addUser(req.body.name)
        .then( (data) => response.success(req, res, data, 201))
        .catch( e => response.error(req,res, 'Internal error', 500, e))
});

module.exports = router;