const axios = require('axios');
const { parseVideoIds } = require('./patterns');

async function findVideos(query) {
  const encoded = encodeURIComponent(query);
  const url = `https://www.youtube.com/results?search_query=${encoded}&sp=EgIQAQ%253D%253D`;

  const res = await axios.get(url);
  const html = res.data;

  return parseVideoIds(html);
}

module.exports = { findVideos };
