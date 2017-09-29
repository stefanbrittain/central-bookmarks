/*jslint unparam: true */

'use strict';

module.exports = {

    query : function (req, res) {
        var q = req.query.q,
            cmd = q.split(" "),
            map = require('./hashMap.js');
        if (cmd.length > 0) {
            if (cmd[0].toUpperCase() !== 'GO') {
                res.redirect('https://www.google.co.uk/search?q=' + q);
            } else {
                q = q.substring(3, q.length).trim();
                map.get(q)
                    .then(function (value) {
                        console.log(value);
                        if (undefined === value) {
                            res.redirect('http://192.168.0.105:3000/index.html?q=' + q);
                        } else {
                            res.redirect(value.url);
                        }
                    });
            }
        }
    }

};
