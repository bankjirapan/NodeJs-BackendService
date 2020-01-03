
const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('this is middleware');
  next();
});

app.use((req, res, next) => {
  console.log('this anotger middleware');
  res.send('<h1>Hello world</h1>')
});

app.listen(3000);
