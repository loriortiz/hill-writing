
const excerpt = require('./plugins/excerpt');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addWatchTarget("./src/style.css");
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    // Optional, default is "---"
  });

  eleventyConfig.addShortcode('excerpt', (poem) => {
    return excerpt(poem);
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
