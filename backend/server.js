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

app.get('/api/pharmacies', async (req, res) => {
    try {
        const response = await axios.get(`${GOOGLE_PLACES_API_URL}?location=5.6700683915201155,-0.18347183534477507&radius=1000&type=pharmacy&key=${API_KEY}`);
        res.json(response.data.results);
    } catch (error) {
        console.error('Error fetching pharmacies:', error);
        res.status(500).json({ error: 'Failed to fetch pharmacies' });
    }
});

app.get('/api/labs', async (req, res) => {
    try {
        const response = await axios.get(`${GOOGLE_PLACES_API_URL}?location=5.6700683915201155,-0.18347183534477507&radius=1000&type=labs&key=${API_KEY}`);
        res.json(response.data.results);
    } catch (error) {
        console.error('Error fetching labs:', error);
        res.status(500).json({ error: 'Failed to fetch labs' });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})

// const express = require('express');
// const app = express();
// const port = 3001;
// const cors = require('cors');
// const axios = require('axios');

// const corsOptions = {
//     origin: 'http://localhost:3000',
// };
// app.use(cors(corsOptions));

// app.get('/api', (req, res) => {
//     res.json({ message: 'Hello from server!' });
// });

// const GOOGLE_DIRECTIONS_API_URL = 'https://maps.googleapis.com/maps/api/directions/json';
// const API_KEY = 'AIzaSyCUXh4aQnm4iGFUSGqChCl0cbR5DHaoYaQ';

// app.get('/api/directions', async (req, res) => {
//     const { origin, destination } = req.query;
//     if (!origin || !destination) {
//         return res.status(400).json({ error: 'Origin and destination are required' });
//     }

//     try {
//         const response = await axios.get(`${GOOGLE_DIRECTIONS_API_URL}?origin=${origin}&destination=${destination}&key=${API_KEY}`);
//         res.json(response.data);
//     } catch (error) {
//         console.error('Error fetching directions:', error);
//         res.status(500).json({ error: 'Failed to fetch directions' });
//     }
// });

// app.get('/api/hospitals', async (req, res) => {
//     try {
//         const response = await axios.get(`${GOOGLE_PLACES_API_URL}?location=5.6700683915201155,-0.18347183534477507&radius=1000&type=hospital&key=${API_KEY}`);
//         res.json(response.data.results);
//     } catch (error) {
//         console.error('Error fetching hospitals:', error);
//         res.status(500).json({ error: 'Failed to fetch hospitals' });
//     }
// });

// app.get('/api/pharmacies', async (req, res) => {
//     try {
//         const response = await axios.get(`${GOOGLE_PLACES_API_URL}?location=5.6700683915201155,-0.18347183534477507&radius=1000&type=pharmacy&key=${API_KEY}`);
//         res.json(response.data.results);
//     } catch (error) {
//         console.error('Error fetching pharmacies:', error);
//         res.status(500).json({ error: 'Failed to fetch pharmacies' });
//     }
// });

// app.get('/api/labs', async (req, res) => {
//     try {
//         const response = await axios.get(`${GOOGLE_PLACES_API_URL}?location=5.6700683915201155,-0.18347183534477507&radius=1000&type=labs&key=${API_KEY}`);
//         res.json(response.data.results);
//     } catch (error) {
//         console.error('Error fetching labs:', error);
//         res.status(500).json({ error: 'Failed to fetch labs' });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server listening at http://localhost:${port}`);
// });