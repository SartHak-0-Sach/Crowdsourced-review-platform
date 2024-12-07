const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    businessId: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    reviewText: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', reviewSchema);