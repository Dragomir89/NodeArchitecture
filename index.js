let env = process.env.NODE_ENV || 'development';
let settings = require('./server/config/settings')[env];
const express = require('express');
let app = express();



require('./server/config/express')(app);
require('./server/config/routes')(app);
require('./server/config/database')(settings);
require('./server/config/passport')();


app.listen(settings.port);
console.log('Listening on port: ' + settings.port);