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
        path : '/status',
        paramType: 'form',
        method: 'GET',
        summary : 'status',
        parameters : [],
        responseMessages : [errors.invalid('name'), errors.notFound('name')],
        nickname : 'status'
    },
    'action': function (req, res) {
        apiFactory.get('status').query(req, res);
    }
};
