// Import stuffs
const Express = require('express');
const bodyParser = require('body-parser');

// custom routes
const Users = require('./routes/user');

// server config
const port = 3000;
var app = Express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Call the custom API
Users(app);

// default route
app.get('/', (req, res) => {
    res.send('API main page');
});

// option method
app.options('/*', (req, res) => {
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTION');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.send();
});

// Listen to port
console.log('Listening on port '+ port);
app.listen(port || env.port);
