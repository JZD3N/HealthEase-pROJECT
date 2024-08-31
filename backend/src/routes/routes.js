const express = require('express');
const router = express.Router();
const userSchema = require('../models');

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