const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Static SEO headlines for simulation
const headlines = [
  "Why {name} is {location}'s Sweetest Spot in 2025",
  "Discover the Magic of {name} in {location}",
  "{name}: The Go-To Place for Treats in {location}",
  "How {name} Became a {location} Favorite",
  "Experience Delight at {name} in {location}"
];

function getRandomHeadline(name, location) {
  const template = headlines[Math.floor(Math.random() * headlines.length)];
  return template.replace('{name}', name).replace('{location}', location);
}

// POST /business-data
app.post('/business-data', (req, res) => {
  const { name, location } = req.body;
  if (!name || !location) {
    return res.status(400).json({ error: 'Name and location are required.' });
  }
  // Simulate data
  const rating = (Math.random() * 1.5 + 3.5).toFixed(1); // 3.5 - 5.0
  const reviews = Math.floor(Math.random() * 200 + 20); // 20 - 220
  const headline = getRandomHeadline(name, location);
  res.json({
    rating: parseFloat(rating),
    reviews,
    headline
  });
});

// GET /regenerate-headline
app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;
  if (!name || !location) {
    return res.status(400).json({ error: 'Name and location are required.' });
  }
  const headline = getRandomHeadline(name, location);
  res.json({ headline });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
}); 