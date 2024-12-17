const express = require('express')
const router = express.Router();
const {getproducts, addproduct, updateproduct, deleteproduct} = require('../controllers/product_controller')

router.get('/products',getproducts);
router.post('/products',addproduct);
router.put('/products/:id',updateproduct);
router.delete('/products/:id',deleteproduct);

module.exports = router