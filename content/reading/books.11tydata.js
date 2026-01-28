export default {
	tags: ["books"],
	eleventyNavigation: {
		parent: "books",
		hide: true,
	},
	og: {
		type: "article",
	},
	layout: "book.liquid",
	permalink: function ({ title }) {
		return `${this.slugify(title)}/index.html`;
	},
	// image: function ({ title, author, pubyear }) {
	// 	return `/${this.readableDate(published, "yyyy-MM-dd")}/${this.slugify(title)}/index.html`;
	// },
};
