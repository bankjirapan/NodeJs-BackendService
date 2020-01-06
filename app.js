
const express = require('express');
const bodyPaser = require('body-parser');
const path = require('path');
const shopRouter = require('./routes/shop');
const adminRouter = require('./routes/admin');

const app = express();

app.use(shopRouter);
app.use(adminRouter);


app.use(bodyPaser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'public')));

app.use((req,res) =>{
  res.sendStatus(404).sendFile(path.join(__dirname,'../','views','404.html'));
})


// App runing
app.listen(3000);
