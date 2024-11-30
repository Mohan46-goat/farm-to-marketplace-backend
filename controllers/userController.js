const User = require('../models/User.js');

// Get all users (Admin only)
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get user profile
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//delete user profile
// Delete user profile
const deleteUserAPI = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully", user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




module.exports = { getAllUsers, getUserProfile, deleteUserAPI };








// const User = require('../models/User.js');

// // Get all users (Admin only)
// const getAllUsers = async (req, res) => {
//     try {
//         const users = await User.find();
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // Get user profile
// const getUserProfile = async (req, res) => {
//     try {
//         const user = await User.findById(req.user._id).select('-password');
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// module.exports = { getAllUsers, getUserProfile };
