const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addShortcode("excerpt", (post) => extractExcerpt(post));
	eleventyConfig.setServerPassthroughCopyBehavior("copy");
	eleventyConfig.addPassthroughCopy("files");
};
