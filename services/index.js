"use strict";
/*jslint unparam: true*/
/*jslint regexp: true*/
/*eslint no-unused-vars: "off"*/
/*eslint capitalized-comments: "off"*/
/*eslint spaced-comment: "off"*/
/*eslint no-inline-comments: "off"*/
/*eslint no-process-env: "off"*/
/*eslint one-var: "off"*/
/*eslint max-params: "off"*/
/*eslint no-path-concat: "off"*/


/*jslint regexp: true*/

/**
 * Module dependencies.
 */

var express = require('express'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser'),
    logger = require('bunyan'),
    swagger_node_express = require('swagger-node-express'),
    url = require('url'),
    storage = require('node-persist'),
    log = logger.createLogger({name: 'myapp'}),
    app = express();

// all environments
app.set('port', process.env.PORT || 8081);
app.use(express.static('public'));

// For Swagger
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var swagger = swagger_node_express.createNew(app);
swagger.addGet(require('./api/status'));
swagger.addGet(require('./api/createSession'));
swagger.addGet(require('./api/redirect'));
swagger.addGet(require('./api/search'));
swagger.addGet(require('./api/set'));
swagger.addGet(require('./api/get'));
swagger.addGet(require('./api/remove'));

storage.init();

app.use(function (req, res, next) {
    log.info(req.originalUrl);
    next();
});

app.get('/hello', function (req, res) {
    res.send('Hello back');
});


// development only
if (app.get('env') === 'development') {
    log.info('In Development Mode');
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });

    // Serve up swagger ui at /docs via static route
    /*jslint nomen: true*/
    var docs_handler = express.static(__dirname + '/node_modules/swagger-node-express/swagger-ui/');

    /*jslint nomen: false*/
    app.get(/^\/docs(\/.*)?$/, function (req, res, next) {

        // express static barfs on root url w/o trailing slash
        if (req.url === '/docs') {
            res.writeHead(302, { 'Location' : req.url + '/' });
            res.end();
            return;
        }
        // take off leading /docs so that connect locates file correctly
        req.url = req.url.substr('/docs'.length);
        return docs_handler(req, res, next);
    });
    swagger.configureSwaggerPaths("", "api-docs", "");
}

//swagger.configure('' + app.get('port'), "0.1");
swagger.configure('/', "0.1");

swagger.setHeaders = function setHeaders(res) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header("Content-Type", "application/json; charset=utf-8");
    log.info("CORS enabled");
};


log.info('Express server starting');
http.createServer(app).listen(app.get('port'), function () {
    log.info('Express server listening on port ' + app.get('port'));
});
