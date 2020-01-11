const productModel = require('../models/product.model');

exports.getProductPage = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add product',
    path: '/admin/add-product'
  });
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
};

exports.postAddProduct = (req, res) => {
  
  const product = new productModel(req.body.title);
  product.save();

  res.redirect('/');
};

exports.getProduct = (req, res, next) => {
  productModel.fetchAll(products =>{
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
  
  //  res.sendFile(path.join(rootDir,'views','shop.html' ));
};
