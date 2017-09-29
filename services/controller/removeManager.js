/*jslint unparam: true */

'use strict';

module.exports = {

    query : function (req, res) {
        var k = req.query.k,
            map = require('./hashMap.js');
        map.remove(k).then(function (value) {
            res.send();
            console.log(value);
        });
    }

};
