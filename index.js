module.exports = function(app) {
    var options = app.accountOptions || {};
    var acc = require('co-accounts')(options);

    app.context.acc = acc;
};


module.exports.backendStub =  require('co-accounts/lib/backend-stub');
