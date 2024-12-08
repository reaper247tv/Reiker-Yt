const express = require('express');
const dotenv = require('dotenv');
const downloadRoute = require('./routes/download.js');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', downloadRoute);

app.get('/', (req, res) => {
  res.send('YouTube Downloader API is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
