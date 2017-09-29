/*jslint unparam: true */

'use strict';

module.exports = {
    query : function (req, res) {
        var AppMap = require('./appmap.js'),
            k = req.query.k,
            v = req.query.v,
            map = require('./hashMap.js'),
            appmap = new AppMap(k, v);
        console.log(appmap.payload());
        map.set(k, appmap.payload())
            .then(function () {
                return map.get(k);
            })
            .then(function (value) {
                res.send({keyword: k, value: value});
                console.log(value);
            });
    }

};
