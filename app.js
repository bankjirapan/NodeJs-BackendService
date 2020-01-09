
const express = require('express');
const bodyPaser = require('body-parser');
const path = require('path');
const shopRouter = require('./routes/shop');
const adminRouter = require('./routes/admin');
const rootDir = require('./util/path');

const app = express();

app.set('view engine','pug');
app.set('views','views');

app.use(bodyPaser.urlencoded({extended: false}))

app.use(shopRouter);
app.use(adminRouter.routes);
app.use('/admin',adminRouter.routes);


app.use(express.static(path.join(__dirname,'public')));

app.use((req,res) =>{
  res.status(404).sendFile(path.join(rootDir,'views','404.html'));
})


// App runing
app.listen(3000);
