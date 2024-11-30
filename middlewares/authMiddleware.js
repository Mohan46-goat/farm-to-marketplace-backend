const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

// Protect routes for logged-in users
const protect = async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1];
            console.log('Received Token:', token);

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log('Decoded Token:', decoded);

            req.user = await User.findById(decoded.id).select('-password');
            if (!req.user) {
                return res.status(404).json({ message: 'User not found' });
            }

            next();
        } catch (error) {
            console.error('JWT Verification Error:', error.message);
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    } else {
        console.error('No Token Provided in Header');
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};


// Admin-only access
const admin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        console.error('Admin Access Denied:', req.user);
        res.status(403).json({ message: 'Not authorized as admin' });
    }
};
module.exports = { protect, admin };
