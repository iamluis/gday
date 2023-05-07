module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("app.js");

};