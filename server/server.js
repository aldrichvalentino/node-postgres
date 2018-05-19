// Import stuffs
const Express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

// custom routes
const Users = require('./routes/user');

// server config
const port = 3000;
var app = Express();
// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: 'generatorpassword123',
    key: 'session',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 600000,
        httpOnly: false
    }
}));

// session checking
const validateSession = (req, res, next) => {
    if(req.session.user){
        next();
    } else {
        res.send({ status: 403 });
    }
}

// default route
app.get('/', validateSession, (req, res) => {
    res.send('API main page');
});

// option method
app.options('/*', (req, res) => {
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTION');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Set-Cookie');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.send();
});

// Call the custom API
app.use('/users', Users);

// Listen to port
app.listen(port || env.port, () => 
    console.log('Listening on port '+ port)
);
