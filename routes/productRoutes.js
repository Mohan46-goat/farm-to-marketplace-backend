const express = require('express');
const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/productController.js');
const { protect, admin } = require('../middlewares/authMiddleware.js');

const router = express.Router();

// Public routes
router.get('/', (req, res) => {
    console.log('Inside GET /products route');
    getAllProducts(req, res);
});
router.get('/:id', (req, res) => {
    console.log('Inside GET /products/:id route');
    getProductById(req, res);
});

// Admin routes
router.post('/', protect, admin, (req, res) => {
    console.log('Inside POST /products route');
    createProduct(req, res);
});
router.put('/:id', protect, admin, (req, res) => {
    console.log('Inside PUT /products/:id route');
    updateProduct(req, res);
});
router.delete('/:id', protect, admin, (req, res) => {
    console.log('Inside DELETE /products/:id route');
    deleteProduct(req, res);
});

module.exports = router;
