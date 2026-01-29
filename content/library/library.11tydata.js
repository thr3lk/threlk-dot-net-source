export default {
	tags: ["library"],
	eleventyNavigation: {
		parent: "library",
		hide: false,
	},
	og: {
		type: "article",
	},
	layout: "book.liquid",
	permalink: function ({ title }) {
		return `library/${this.slugify(title)}/index.html`;
	},
	// image: function ({ title, author, pubyear }) {
	// 	return `/${this.readableDate(published, "yyyy-MM-dd")}/${this.slugify(title)}/index.html`;
	// },
};
