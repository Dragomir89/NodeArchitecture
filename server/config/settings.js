

module.exports = {

    development:{

        db:'mongodb://localhost:27017/generatetemplate',
        port: 1111
    },
    staging:{

    },
    production:{
        db:'',
        port: process.env.PORT
    }

}