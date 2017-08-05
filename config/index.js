var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname +
                ':' + configValues.pwd +
                '@ds129143.mlab.com:29143/nodetodosample';
    }


}