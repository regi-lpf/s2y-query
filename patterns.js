function parseVideoIds(html) {
    const matches = [...html.matchAll(/"videoId":"(.*?)"/g)];
    const ids = [...new Set(matches.map(m => m[1]))];
    return ids;
  }
  
  module.exports = { parseVideoIds };
  