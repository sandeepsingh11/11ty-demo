module.exports = function(eleventyConfig) {
    // eleventyConfig.addPassthroughCopy("./src/css/main.css");
    eleventyConfig.addPassthroughCopy("./src/images");
    
    // Input Directory : src Output directory: _site
    return {
        dir: { input: 'src', output: '_site' }
    };
};
