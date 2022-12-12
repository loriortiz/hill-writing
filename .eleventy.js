
const excerpt = require('./plugins/excerpt');
const pluginDate = require("eleventy-plugin-date");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.addWatchTarget("./src/style.css");
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
  });

  eleventyConfig.addShortcode('excerpt', (poem) => {
    return excerpt(poem);
  });

  eleventyConfig.addPlugin(pluginDate, {
    formats: {
      readableDate: { year: 'numeric' },
      includeDefaults: false,
    },
  });
 
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
