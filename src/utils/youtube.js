const ytdl = require('ytdl-core');

/**
 * Get YouTube video metadata
 * @param {string} url
 * @returns {Promise<Object>}
 */
const getYouTubeMetadata = async (url) => {
  const info = await ytdl.getInfo(url);
  return {
    title: info.videoDetails.title,
    author: info.videoDetails.author.name,
  };
};

/**
 * Get downloadable audio link
 * @param {string} url
 * @returns {Promise<string>}
 */
const getDownloadLink = async (url) => {
  const audioFormats = ytdl.filterFormats(await ytdl.getInfo(url).formats, 'audioonly');
  const bestAudio = audioFormats[0];
  return bestAudio.url; // Direct audio link
};

module.exports = { getYouTubeMetadata, getDownloadLink };
