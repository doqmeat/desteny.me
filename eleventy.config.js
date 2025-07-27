import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(feedPlugin, {
		type: "rss", // or "rss", "json"
		outputPath: "/feed.xml",
		collection: {
			name: "posts", // iterate over `collections.posts`
			limit: 10, // 0 means no limit
		},
		metadata: {
			language: "en",
			title: "desteny's blog",
			subtitle: "blog posts about life n studies",
			base: "https://desteny.me/",
			author: {
				name: "des",
				email: "info@desteny.me", // Optional
			},
		},
	});
}
