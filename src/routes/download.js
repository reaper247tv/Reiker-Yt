const express = require('express');
const { getYouTubeMetadata, getDownloadLink } = require('../utils/youtube.js');

const router = express.Router();

router.get('/download', async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'YouTube URL is required' });
  }

  try {
    const metadata = await getYouTubeMetadata(url);
    const downloadLink = await getDownloadLink(url);

    res.json({
      song_name: metadata.title,
      download_link: downloadLink,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error processing the request', details: error.message });
  }
});

module.exports = router;
