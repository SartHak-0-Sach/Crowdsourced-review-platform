const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register a new user
router.post('/register', async (req, res) =>
{
    try
    {
        const { username, email, password } = req.body;
        const newUser = new User({ username, email, password });
        const savedUser = await newUser.save();
        res.json({ message: 'User registered successfully', user: savedUser });
    } catch (err)
    {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    }
});

// Login a user
router.post('/login', async (req, res) =>
{
    
});

module.exports = router;