/*jslint unparam: true */

'use strict';

module.exports = {

    query : function (req, res) {
        var k = req.query.k,
            map = require('./hashMap.js');
        map.get(k).then(function (value) {
            res.send({keyword: k, value: value});
            console.log(value);
        });
    }

};
