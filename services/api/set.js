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
        path : '/set',
        paramType: 'form',
        method: 'GET',
        summary : 'set',
        parameters : [paramTypes.query('k', 'key to set', 'string'), paramTypes.query('v', 'value', 'string')],
        responseMessages : [errors.invalid('set'), errors.notFound('set')],
        nickname : 'set'
    },
    'action': function (req, res) {
        apiFactory.get('set').query(req, res);
    }
};
