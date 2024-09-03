const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 5000;

app.use(cors());   


app.get('/places', async (req, res) => {
  try {
    const apiKey = 'AIzaSyD6scoBO74hV5-0x3BRmjJk-wsztI1L2Gk';
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=52.516272,13.377722&radius=1000&type=pharmacy|hospital|laboratory&key=${apiKey}`;

    const response = await axios.get(url);
    const data = response.data;
    res.json(data.results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch places' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = mapAPI;