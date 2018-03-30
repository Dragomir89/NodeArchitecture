const mongoose = require('mongoose');
const User = require('../data/User');

mongoose.Promise = global.Promise;

module.exports = function(settings){

    mongoose.connect(settings.db);

    let db = mongoose.connection;

    db.once('open', (err)=>{
        if(err){
            console.log('DB Connection Error !')
            console.log(err);
            return;
        }
        console.log('MongoDB Ready!');
        
        User.seedAdminUser();
    })

    db.on('error', (err)=>{
        console.log(err);  
    })

}