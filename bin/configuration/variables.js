const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        conection: process.env.conection || 'mongodb://admin:admin5150@ds145573.mlab.com:45573/yakissoba'
    }
}

module.exports = variables;