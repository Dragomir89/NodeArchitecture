

module.exports = {

    development:{
        db:'mongodb://localhost:27017/generatetemplate',
        port: 1111
    },
    staging:{
        db:'mongodb://admin:admin@ds129939.mlab.com:29939/test-test',
        port: process.env.PORT
    },
    production:{
        db:'mongodb://admin:admin@ds129939.mlab.com:29939/test-test',
        port: process.env.PORT
    }

}