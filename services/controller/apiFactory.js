'use strict';

module.exports = {
    get : function (method) {
        try {
            var ret;
            switch (method) {
            case 'status':
                  ret = require('./statusManager.js');
                  break;
            case 'session':
                ret = require('./sessionManager.js');
                break;
            case 'redirect':
                ret = require('./redirectManager.js');
                break;
            case 'search':
                ret = require('./searchManager.js');
                break;
            case 'set':
                ret = require('./setManager.js');
                break;
            case 'get':
                ret = require('./getManager.js');
                break;
            case 'remove':
                ret = require('./removeManager.js');
                break;
            }
            return ret;
        } catch (err) {
            console.log(err);
        }
    }
};
