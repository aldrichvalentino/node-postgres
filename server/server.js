const Express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

// database
const sequelize = new Sequelize('seqdb', 'admin', 'admin', {
    host: 'db',
    dialect: 'postgres',
    port: 5432,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    operatorsAliases: false
});

// database operation test
const User = sequelize.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
});

// server config
const port = 3000;
var app = Express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// get home
app.get('/', (req, res) => {
    res.send('API main page');
    sequelize.sync();
});

// get user resource
app.get('/users', (req, res) => {
    User.findAll()
        .then(users => {
            res.header('Access-Control-Allow-Origin', '*');
            res.send(users);
        });
});

// options
app.options('/*', (req, res) => {
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTION');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.send();
});

// get user by id
app.get('/users/:id', (req, res) => {
    User.findById(req.params.id)
        .then(users => {
            res.header('Access-Control-Allow-Origin', '*');
            res.send(users);
        });
});

// post to user
app.post('/users' ,(req, res) => {
    var username = req.body.username;
    var birthYear = req.body.birthYear;
    var birthMonth = req.body.birthMonth;
    var birthDate = req.body.birthDate;
    User.create({
        username: username,
        birthday: new Date(birthYear, birthMonth, birthDate)
    }).then(newUser => {
        res.header('Access-Control-Allow-Origin', '*');
        res.send(newUser);
    });
});

// Listen to port
console.log('Listening on port '+ port);
app.listen(port || env.port);