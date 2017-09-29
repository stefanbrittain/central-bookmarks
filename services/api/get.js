'use strict';
/*eslint no-unused-vars: "off"*/

var express = require('express'),
    bodyParser = require('body-parser'),
    swagger_node_express = require('swagger-node-express'),
    paramTypes = swagger_node_express.paramTypes,
    errors = swagger_node_express.errors,
    apiFactory = require('../controller/apiFactory.js');


module.exports = {
    'spec': {
        path : '/get',
        paramType: 'form',
        method: 'GET',
        summary : 'get',
        parameters : [paramTypes.query('k', 'key to get', 'string')],
        responseMessages : [errors.invalid('get'), errors.notFound('get')],
        nickname : 'get'
    },
    'action': function (req, res) {
        apiFactory.get('get').query(req, res);
    }
};
