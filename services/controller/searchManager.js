/*jslint unparam: true */

'use strict';

module.exports = {

    query : function (req, res) {
        var q = req.query.q,
            cmd = q.split(" "),
            map = require('./hashMap.js');
        if (cmd.length > 0) {
            if (cmd[0].toUpperCase() === 'GO') {
                res.sendStatus(404);
            } else {
                map.getAll(q)
                    .then(function (values) {
                        if (values !== null) {
                            res.send(values);
                            res.status(200);
                            console.log(values);
                        } else {
                            res.sendStatus(404);
                        }
                    });
            }
        }
    }

};
