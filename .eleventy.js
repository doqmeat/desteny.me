module.exports = function (eleventyConfig) {
	eleventyConfig.setServerPassthroughCopyBehavior("copy");
	eleventyConfig.addPassthroughCopy("**/*css");
	eleventyConfig.addPassthroughCopy("**/*jpeg");
	eleventyConfig.addPassthroughCopy("**/*jpg");
	eleventyConfig.addPassthroughCopy("**/*png");
	eleventyConfig.addPassthroughCopy("**/*gif");
	eleventyConfig.addPassthroughCopy("**/*ttf");
	return {
		dir: {
			input: "desteny.me",
		},
	};
};
