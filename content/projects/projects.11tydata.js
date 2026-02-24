export default {
	tags: ["projects"],
	eleventyNavigation: {
		parent: "projects",
		hide: true,
	},
	og: {
		type: "article",
	},
	layout: "project.liquid",
	permalink: function ({ title }) {
		return `/projects/${this.slugify(title)}/index.html`;
	},
};
