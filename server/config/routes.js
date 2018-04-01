const controllers = require('../controllers/index');
//0884410832
// 


module.exports = function(app){
    
    console.log('Routes Ready!');
   
    app.get('/', controllers.home.index);
    app.get('/about', controllers.home.about);
    app.get('/login', controllers.users.loginGET);
    app.post('/login', controllers.users.loginPOST);
    app.get('/register', controllers.users.registerGET);
    app.post('/register', controllers.users.registerPOST);
    app.get('/logout',controllers.users.logout);


    app.all('*', (req,res)=>{
        console.log('4  0  4');
        console.log(req.header);
        res.status(404);
        res.send('404 Not Found :(');
        res.end();
        
    });
}