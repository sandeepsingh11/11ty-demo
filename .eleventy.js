module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("styles/main.css");
    
    // Input Directory : src Output directory: _site
    return {
        dir: { input: 'src', output: '_site' }
    };
};
