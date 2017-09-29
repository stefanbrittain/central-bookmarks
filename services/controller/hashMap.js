'use strict';
/*jslint plusplus: true */
/*global Promise */

var storage = require('node-persist');

module.exports = {

    set : function (k, v) {
        return storage.setItem(k, v);
    },
    get : function (k) {
        return storage.getItem(k);
    },
    getAll : function (k) {
        var promise = new Promise(function (resolve) {
            var i = 0,
                result = [],
                array = storage.keys(),
                re = new RegExp(k, 'i'),
                process = function (key) {
                    storage.getItem(key).then(function (value) {
                        result.push({ keyword: key, value: value});
                    });
                };
            console.log(re);
            for (i = 0; i < array.length; i++) {
                if (array[i].match(re) !== null) {
                    process(array[i]);
                }
            }
            resolve(result);
        });
        return promise;
    },
    remove : function (k) {
        return storage.removeItem(k);
    }
};
