
const express = require('express');
const bodyPaser = require('body-parser');

const shopRouter = require('./routes/shop');
const adminRouter = require('./routes/admin');

const app = express();

app.use(shopRouter);
app.use(adminRouter);

app.use(bodyPaser.urlencoded({extended: false}))



// App runing
app.listen(3000);
