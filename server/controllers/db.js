const mongoose = require("mongoose");
const Restaurant = mongoose.model("Restaurant");
const Review = mongoose.model("Review");

class Restaurants
{
    async getAllRestaurants(req, res)
    {
        try
        {
            const restaurants = await Restaurant.find();
            res.status(200).json(restaurants);
        } catch (err)
        {
            console.error(err);
            res.status(500).json({ message: "Error fetching restaurants" });
        }
    }

    async getRestaurant(req, res)
    {
        try
        {
            const restaurant = await Restaurant.findById(req.params.id);
            if (!restaurant)
            {
                return res.status(404).json({ message: "Restaurant not found" });
            }
            res.status(200).json(restaurant);
        } catch (err)
        {
            console.error(err);
            res.status(500).json({ message: "Error fetching restaurant" });
        }
    }

    async addReview(req, res)
    {
        try
        {
            const { restaurantId, ...reviewData } = req.body;
            const review = new Review(reviewData);
            await review.save();

            const restaurant = await Restaurant.findByIdAndUpdate(
                restaurantId,
                { $push: { reviews: review } },
                { new: true }
            );

            if (!restaurant)
            {
                return res.status(404).json({ message: "Restaurant not found" });
            }

            res.status(201).json({ message: "Review added successfully", review });
        } catch (err)
        {
            console.error(err);
            res.status(500).json({ message: "Error adding review" });
        }
    }

    async getReviewsForRestaurant(req, res)
    {
        try
        {
            const restaurantId = req.params.id;
            const restaurant = await Restaurant.findById(restaurantId).populate('reviews');

            if (!restaurant)
            {
                return res.status(404).json({ message: "Restaurant not found" });
            }

            res.status(200).json(restaurant.reviews);
        } catch (err)
        {
            console.error(err);
            res.status(500).json({ message: "Error fetching reviews" });
        }
    }
}

module.exports = new Restaurants();