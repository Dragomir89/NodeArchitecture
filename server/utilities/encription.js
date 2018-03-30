const crypto = require('crypto');

function generateSalt(){
    return crypto.randomBytes(128).toString('base64');
}

function generateHashedPassword(salt, password){
    return crypto.createHash('sha256', salt).update(password).digest('hex');
}

module.exports = {
    generateSalt: generateSalt,
    generateHashedPassword: generateHashedPassword
}