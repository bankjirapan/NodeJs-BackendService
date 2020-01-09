const express = require('express');
const router = express.Router();

const productController = require('../controllers/products.controller');


router.get('/add-product',productController.getProductPage);
router.post('/add-product',productController.postAddProduct);

module.exports = router;
