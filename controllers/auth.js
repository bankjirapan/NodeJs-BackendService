const user = require('../models/user');
const bcrypt = require('bcryptjs');
exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req.get('Cookie').split(";")[1].trim().split("=")[1]
  console.log(req.session.isLoggedIn);
  res.render('auth/login', {
    pageTitle: 'Admin Login',
    path: '/login',
    isAuthenticated: req.session.isLoggedIn
  });
};

exports.postLogin = (req, res, next) => {
  // res.cookie('loggedIn',true,{maxAge: 360000});
  user
    .findOne({ where: { email: req.body.email } })
    .then(result => {
      req.session.user = result;
      req.session.isLoggedIn = true;
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.logout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};

// Register path

exports.getRegister = (req, res, next) => {
  res.render('auth/register', {
    pageTitle: 'Register',
    path: '/register',
    isAuthenticated: req.session.isLoggedIn
  });
};

exports.postRegister = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirm = req.body.conpassword;

  user
    .findOne({ where: { email: email } })
    .then(userDoc => {
      if (userDoc) {
        return res.redirect('/register');
      }
      return bcrypt.hash(password, 12).then(hashPassword => {
        const newUser = new user({
          email: email,
          password: hashPassword
        });
        return newUser.save();
      });
    })
    .then(result => {
      res.redirect('/login');
    })
    .catch(err => {
      console.log(err);
    });
};
