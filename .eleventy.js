module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "src",      // Tells the factory where our raw files live
      output: "_site"    // Tells the factory where to put the finished website
    }
  };
};