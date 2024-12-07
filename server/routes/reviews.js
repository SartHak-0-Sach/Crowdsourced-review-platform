const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Create a new review
router.post('/', async (req, res) =>
{
    try
    {
        const { userId, businessId, rating, reviewText } = req.body;
        const newReview = new Review({ userId, businessId, rating, reviewText });
        const savedReview = await newReview.save();
        res.json({ message: 'Review created successfully', review: savedReview });
    } catch (err)
    {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    }
});

// Get reviews for a specific business
router.get('/business/:businessId', async (req, res) =>
{
    try
    {
        const businessId = req.params.businessId;
        const reviews = await Review.find({ businessId });
        res.json(reviews);
    } catch (err)
    {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    }
});

module.exports = router;