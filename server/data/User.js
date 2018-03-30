const mongoose = require('mongoose');
const encryption = require('../utilities/encription');

const REQUIRED_VALIDATION_MSG = "{PATH} is required";


let userSchema = new mongoose.Schema({
    username:{ type: String, required: REQUIRED_VALIDATION_MSG, unique: true },
    firstName:{ type: String, required: REQUIRED_VALIDATION_MSG },
    lastName:{ type: String, required: REQUIRED_VALIDATION_MSG },
    hashedPass:{ type: String, required: REQUIRED_VALIDATION_MSG },
    salt:{ type:String, required: REQUIRED_VALIDATION_MSG },
    rols:[String]
});

userSchema.method({
    authenticate: function(password){
        return encryption.generateHashedPassword(this.salt, password) === this.hashedPass;
    }
});

function seedAdminUser(){
    User.find({}).then((users)=>{
        if(users.length > 0){return;}

        let salt = encryption.generateSalt();
        let hashedPass = encryption.generateHashedPassword(salt, '12345');

        User.create({
            username: 'Admin',
            firstName: 'Admin',
            lastName: 'Admin',
            hashedPass: hashedPass,
            salt: salt,
            rols:['Admin']          
        });
        console.log('Admin was added!');
    });
    
}


let User = mongoose.model('User', userSchema);

User.seedAdminUser = seedAdminUser;

module.exports = User;
module.exports.seedAdminUser;




