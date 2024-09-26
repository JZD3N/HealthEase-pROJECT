const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const axios = require('axios');
const corsOptions = {
    origin: 'http://localhost:3000',
};
app.use (cors(corsOptions));

app.get('/api',(req, res) => {
    res.json({ message: 'Hello from server!' });
});

const GOOGLE_PLACES_API_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
const API_KEY = 'AIzaSyCUXh4aQnm4iGFUSGqChCl0cbR5DHaoYaQ';

app.get('/api/hospitals', async (req, res) => {
    try {
        const response = await axios.get(`${GOOGLE_PLACES_API_URL}?location=5.6700683915201155,-0.18347183534477507&radius=1000&type=hospital&key=${API_KEY}`);
        res.json(response.data.results);
    } catch (error) {
        console.error('Error fetching hospitals:', error);
        res.status(500).json({ error: 'Failed to fetch hospitals' });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})