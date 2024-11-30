const express = require('express');
const { getAllUsers, getUserProfile, deleteUserAPI } = require('../controllers/userController.js');
const { protect, admin } = require('../middlewares/authMiddleware.js');

const router = express.Router();

// Protected routes
router.get('/profile', protect, getUserProfile);

// Admin routes
router.get('/', protect, admin, getAllUsers);

//delete routes
router.delete('/:id', protect, admin, deleteUserAPI);


module.exports = router;
