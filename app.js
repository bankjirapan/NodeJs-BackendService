
const express = require('express');
const bodyPaser = require('body-parser');
const path = require('path');
const shopRouter = require('./routes/shop');
const adminRouter = require('./routes/admin');


const app = express();

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyPaser.urlencoded({extended: false}))

app.use(shopRouter);
app.use(adminRouter);
app.use('/admin',adminRouter);


app.use(express.static(path.join(__dirname,'public')));

app.use((req,res) =>{
  // res.status(404).sendFile(path.join(rootDir,'views','404.html'));
  res.status(404).render('404',{ pageTitle : "404 Page Not Found",path : '404'});
})


// App runing
app.listen(3000);
