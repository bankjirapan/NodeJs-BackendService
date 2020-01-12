const productModel = require('../models/product.model');



exports.getProduct = (req, res, next) => {
  productModel.fetchAll(products =>{
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Product',
      path: '/products'
    });
  });
};

exports.getIndex = (req,res,next) =>{
  productModel.fetchAll(products =>{
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
}

exports.getCart = (req,res,next) =>{

  res.render('shop/cart',{
    path : '/cart',
    pageTitle : 'View cart'
  })

}

exports.getCheckout = (req,res,next) =>{

  res.render('shop/checkout',{
    path : '/cart',
    pageTitle : 'Checkout'
  })

}