<?php

/*
 * Plugin Name: Blocks
 * Description: Blocks library
 * Author: Internetstiftelsen
 * Author URI: https://internetstiftelsen.se
 * Version: 1.0.0
 * Plugin URI: https://github.com/sewebb/iis-blocks
 */

require_once __DIR__ . '/src/classes/index.php';
require_once __DIR__ . '/src/blocks/index.php';

function iis_blocks_assets() {
	wp_register_script(
		'iis_blocks-js', // Handle.
		plugins_url( '/dist/js/blocks.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'dist/js/blocks.js' ),
		true
	);

	wp_register_style(
		'iis_blocks-css', // Handle.
		plugins_url( 'dist/css/blocks.css', __FILE__ ),
		['wp-edit-blocks'],
		filemtime( plugin_dir_path( __FILE__ ) . 'dist/css/blocks.css' )
	);

	register_block_type(
		'iis/blocks', array(
			'editor_script' => 'iis_blocks-js',
			'editor_style'  => 'iis_blocks-css',
		)
	);
}

/**
 * Register new block category "iis"
 *
 * @param  array $categories [description]
 * @return array
 */
function iis_blocks_categories( $categories ) {
	$category = array_search( 'iis', array_column( $categories, 'slug' ) );

	if (false !== $category) {
		return $categories;
	}

	return array_merge(
		[
			[
				'slug'  => 'iis',
				'title' => 'Internetstiftelsen',
			],
		],
		$categories
	);
}

add_filter( 'block_categories', 'iis_blocks_categories', 10 );
add_action( 'init', 'iis_blocks_assets' );
