/*jslint unparam: true */

'use strict';

module.exports = {

    query : function (req, res) {
        res.send({
          version:"0.0.0",
          status:"Ok"});
        res.status(200);
    }

};
