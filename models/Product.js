const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        subname: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        pricecaption: { type: String, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: true }, // URL for product image
        category: { type: String, required: true },
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
