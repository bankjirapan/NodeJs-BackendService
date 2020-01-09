const products = [];

exports.getProductPage = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add product',
    path: '/admin/add-product'
  });
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
};

exports.postAddProduct = (req, res) => {
  products.push({
    title: req.body.title
  });

  res.redirect('/');
};

exports.getProduct = (req, res, next) => {
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/'
  });
  //  res.sendFile(path.join(rootDir,'views','shop.html' ));
};
