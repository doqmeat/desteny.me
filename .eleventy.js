const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
	eleventyConfig.setServerPassthroughCopyBehavior("copy");

	eleventyConfig.addPassthroughCopy("files");

	// This will stop the default behaviour of foo.html being turned into foo/index.html
	eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");

	// default layout: main.html
	eleventyConfig.addGlobalData("layout", "main.html");
	// default date format
	eleventyConfig.addGlobalData("date", "git Last Modified");

	// custom page.date ----- {{ page.date | postDate }}
	eleventyConfig.addFilter("postDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toFormat("dd.MMM.yy");
	});

	// RSS
	eleventyConfig.addPlugin(pluginRss, {
		type: "rss", // or "rss", "json"
		outputPath: "/feed.xml",
		collection: {
			name: "posts", // iterate over `collections.posts`
			limit: 10, // 0 means no limit
		},
		metadata: {
			language: "en",
			title: "desteny's RSS",
			subtitle: "portfolio-ish site",
			base: "https://desteny.me",
			author: {
				name: "des",
			},
		},
	});
};
