const user = require('../models/user');
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

exports.logout = (req,res,next) =>{

    req.session.destroy(err =>{
      console.log(err);
      res.redirect('/')
    })
}
