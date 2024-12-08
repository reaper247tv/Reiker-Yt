const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  server: {
    port: process.env.PORT || 3000, // Server Port
  },
  youtube: {
    // You can add placeholders or settings for future enhancements
    apiKey: process.env.YOUTUBE_API_KEY || null, // Optional: if using YouTube Data API
  },
  app: {
    name: 'YouTube Downloader API',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
  },
};
