const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

app.use(express.json());

app.use('/api/reviews', require('./routes/reviews'));

app.listen(port, () =>
{
    console.log(`Server started on port ${port}`);
});