const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = (eleventyConfig) => {
    eleventyConfig.setTemplateFormats([
        "html",
        "css",
        "png",
        "svg",
        "ico",
        "pdf",
    ]);
    eleventyConfig.addPassthroughCopy({ "src/images/favicons": "/" });
    eleventyConfig.addPlugin(pluginRss);

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
