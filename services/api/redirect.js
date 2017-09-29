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
        path : '/redirect',
        paramType: 'form',
        method: 'GET',
        summary : 'redirect',
        parameters : [paramTypes.query('q', 'text to search for', 'string')],
        responseMessages : [errors.invalid('name'), errors.notFound('name')],
        nickname : 'redirect'
    },
    'action': function (req, res) {
        apiFactory.get('redirect').query(req, res);
    }
};
