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
    try
    {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });

        // Check if user exists
        if (!user)
        {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Compare password with hashed password in database
        const isMatch = await bcrypt.compare(password, user.password);

        // Check if password matches
        if (!isMatch)
        {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Login successful, send user data (consider using JWT for secure authentication)
        res.json({ message: 'Login successful', user }); // Modify response data as needed

    } catch (err)
    {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    }
});

module.exports = router;