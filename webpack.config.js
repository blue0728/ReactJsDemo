module.exports = {
	entry: [
		'./main.js'
	],
	output: {
		path: __dirname + '/dist/',
		publicPath: "/dist/",
		filename: 'bundle.js'
	},
	plugins: []
};