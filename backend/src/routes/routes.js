
// This code creates a new user in the database using the data from the request body.
// If the user is created successfully, it returns a 201 status code with the new user object.
// If there is an error creating the user, it returns a 500 status code with an error message.

const express = require('express');
const router = express.Router();
const User = require('../models/UserSchema');

router.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error:   
 'Error creating user' });
  }
});

module.exports = router;