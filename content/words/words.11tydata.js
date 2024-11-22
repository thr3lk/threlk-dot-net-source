export default {
	tags: [
		"words"
	],
	eleventyNavigation:{
		parent: "words",
		hide: true
	},
	layout: "post.liquid",
	permalink: function ({ title, published }) {
		return `/${this.readableDate(published, "yyyy-MM-dd")}/${this.slugify(title)}/index.html`;
	},
};