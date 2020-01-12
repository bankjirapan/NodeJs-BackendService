const productModel = require('../models/product.model');

exports.getProductPage = (req, res, next) => {
    res.render('admin/add-product', {
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

  exports.getProducts = (req,res,next) => {
    productModel.fetchAll(products =>{
        res.render('admin/products', {
          prods: products,
          pageTitle: 'admin product',
          path: '/admin/products'
        });
      });
  }