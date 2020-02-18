exports.getLogin = (req,res,next) =>{

    res.render('auth/login',{
        pageTitle : "Admin Login",
        path : '/admin/login',
        isAuthenticated : req.isLoggedIn
    })

}

exports.postLogin = (req,res,next) =>{
    req.isLoggedIn = true,
    res.redirect('/');
}