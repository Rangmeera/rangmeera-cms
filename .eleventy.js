module.exports = function(eleventyConfig) {
  // Strictly forces Eleventy to copy the entire admin folder AND your images folder
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};