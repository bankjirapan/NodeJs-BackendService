const express = require('express');

const router = express.Router();

router.use('/admin/add-product', (req, res, next) => {
  res.send(
    '<form action="/product" method="post"> <input type="text" name="productName"> <button type="submit">Add</button> </form>'
  );
});

router.post('/admin/product', (req, res) => {
  console.log(req.body.productName);
  res.redirect('/');
});


module.exports = router;