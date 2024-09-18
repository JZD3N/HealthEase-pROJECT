const express = require('express');
const router = express.Router();

router.get('/places', async (req, res) => {
  const { query, location, radius } = req.query;
  const apiResponse = await fetch(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&type=place&keyword=${query}&key=${process.env.GOOGLE_MAPS_API_KEY}`
  );
  const data = await apiResponse.json();
  res.send(data.results);
});

module.exports = router;
