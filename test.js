const { search } = require('./index');

(async () => {
  const results = await search("lofi hip hop");
  console.log(results);
})();
