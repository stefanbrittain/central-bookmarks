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
        path : '/remove',
        paramType: 'form',
        method: 'GET',
        summary : 'set',
        parameters : [paramTypes.query('k', 'key to remove', 'string')],
        responseMessages : [errors.invalid('set'), errors.notFound('set')],
        nickname : 'remove'
    },
    'action': function (req, res) {
        apiFactory.get('remove').query(req, res);
    }
};
