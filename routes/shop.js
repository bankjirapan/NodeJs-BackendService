const express = require('express');
const router = express.Router();


const shopController  = require('../controllers/shop.controller');


router.get('/', shopController.getIndex);
router.get('/products',shopController.getProduct);
router.get('/cart',shopController.getCart);
router.get('/checkout',shopController.getCheckout)

module.exports = router;
