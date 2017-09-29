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
        path : '/search',
        paramType: 'form',
        method: 'GET',
        summary : 'search',
        parameters : [paramTypes.query('q', 'text to search for', 'string')],
        responseMessages : [errors.invalid('name'), errors.notFound('name')],
        nickname : 'search'
    },
    'action': function (req, res) {
        apiFactory.get('search').query(req, res);
    }
};
