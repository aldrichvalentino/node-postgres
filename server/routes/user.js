const model = require('../models/user');
const User = model.User;

module.exports = function(app) {
    app.get('/users', function(req, res) {
        User.findAll()
            .then( user =>
                res.send(user)
            );
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

};