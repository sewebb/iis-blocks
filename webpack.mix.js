const mix = require('laravel-mix');

mix
	.js('./src/js/blocks.js', './dist/js/blocks.js')
	.sass('./src/scss/blocks.scss', './dist/css/blocks.css', {
		includePaths: ['node_modules'],
	});
