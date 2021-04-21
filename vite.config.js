const path = require("path");

module.exports = {
	'resolve.alias': {
		// 路径映射必须以/开头和结尾
		"/@/": path.resolve(__dirname, "./src"),
	},
	esbuild: {
		jsxFactory: 'h',
		jsxFragment: 'Fragment'
	}
};
