const model = require("../models/user");
const User = model.User;
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

// session checking
const sessionValidator = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Credentials", "true");
    res.send("not yet login");
  }
};

router.get("/", sessionValidator, function(req, res) {
  model.sync().then(() =>
    User.findAll().then(user => {
      res.header("Access-Control-Allow-Origin", "http://localhost:8080");
      res.header("Content-Type", "application/json");
      res.header("Access-Control-Allow-Credentials", "true");
      res.send(user);
    })
  );
});

// get user by id
router.get("/:id", sessionValidator, (req, res) => {
  model.sync().then(() =>
    User.findById(req.params.id).then(users => {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(users);
    })
  );
});

// post to user
router.post("/", (req, res) => {
  var name = req.body.name;
  var password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync());
  var email = req.body.email;
  model.sync().then(() =>
    User.create({
      name: name,
      password: password,
      email: email
    }).then(newUser => {
      res.header("Access-Control-Allow-Origin", "http://localhost:8080");
      res.header("Content-Type", "application/json");
      res.header("Access-Control-Allow-Credentials", "true");
      // create the session
      req.session.user = newUser.name;
      res.send({ user: newUser.name });
    })
  );
});

module.exports = router;
