module.exports = (eleventyConfig) => {
    eleventyConfig.setTemplateFormats(["html", "css", "png"]);
    eleventyConfig.addPassthroughCopy("styles");
    eleventyConfig.addPassthroughCopy("images");

    return {
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        dir: {
            input: "src",
            output: "dist",
        },
    };
};
