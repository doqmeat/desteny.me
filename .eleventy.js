module.exports = function (eleventyConfig) {
	eleventyConfig.setServerPassthroughCopyBehavior("copy");
	eleventyConfig.addPassthroughCopy("desteny.me/files");
	return {
		dir: {
			input: "desteny.me",
		},
	};
};
