const encryption = require('../utilities/encription');
const User = require('../data/User');

const viewsPath = 'public/views/users/';

function loginGET(req, res){
    res.sendfile(viewsPath + 'login.html');
}


function loginPOST(req, res){
   let reqUser = req.body;

   User.findOne({username: reqUser.username}).then((user)=>{
       if(!user){
            res.send("Invalid Username Or Password");
            return;
       }

       if(!user.authenticate(reqUser.password)){
            res.send("Invalid Username Or Password");
            return;
        }   

        req.logIn(user,( err,user)=>{
            if(err){
                res.sendfile(viewsPath + 'login.html');
                return;
            }
            else{
                res.redirect('/')
            }
        })

   }).catch((err)=>{
       console.log('Login post faild!');
       console.log(err);
       return;
   });
}

function registerGET(req, res){
    res.sendfile(viewsPath + 'register.html');
}


function registerPOST(req, res){
    console.log(req.body);
    let reqUser = req.body;
    let salt = encryption.generateSalt();
    console.log(reqUser.password.length);

    if(reqUser.password.length < 2){
        res.send('Invalid Password');
        return;
    }
    let hashedPass = encryption.generateHashedPassword(salt, req.body.password);
    User.create({
        username: reqUser.username,
        firstName: reqUser.firstName,
        lastName: reqUser.lastName,
        salt: salt,
        hashedPass: hashedPass,
        rols:['User']
    }).then((user)=>{
        console.log('created user:');
        
        req.logIn(user,(err, user)=>{
            if(err){
                console.log('ERROR with user');
                console.log(err);
                res.send(err);
            }
            console.log('req user: -->')
            console.log(req.user);
            res.redirect('/')
        })
    }).catch((err)=>{
        res.send(err);
    })
    //res.send(req.body);
}

function logout(req, res){
    req.logout();
    loginGET(req,res);
}

module.exports = {
    loginGET    :loginGET,
    loginPOST   :loginPOST,
    registerGET :registerGET,
    registerPOST:registerPOST,
    logout      :logout
}