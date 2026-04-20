const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

let locations = [];

// terima lokasi
app.post('/location', (req, res) => {
  locations.push(req.body);
  console.log("Lokasi:", req.body);
  res.sendStatus(200);
});

// kirim semua lokasi ke admin
app.get('/locations', (req, res) => {
  res.json(locations);
});

app.listen(3000, () => {
  console.log("Server jalan di http://localhost:3000");
});
