<?php

/*
 * Plugin Name: IIS Blocks
 * Description: Block library from Internetstiftelsen
 * Author: Internetstiftelsen
 * Author URI: https://internetstiftelsen.se
 * Version: 5.2.2
 * Plugin URI: https://github.com/sewebb/iis-blocks
 * Text Domain: iis-blocks
 * Domain Path: /languages/
 */

require_once __DIR__ . '/src/classes/index.php';
require_once __DIR__ . '/src/blocks/index.php';

/**
 * Register image sizes
 */
function iis_blocks_register_sizes() {
	add_image_size( 'puff-image', 500, 290, [ 'center', 'top' ] );
	add_image_size( 'puff-teaser-image', 426, 505, true );
	add_image_size( 'puff-image-4:3', 500, 375, [ 'center', 'top' ] );
}

add_action( 'after_setup_theme', 'iis_blocks_register_sizes' );

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

function iis_blocks_load_textdomain() {
	load_plugin_textdomain( 'iis-blocks', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
}

add_action( 'plugins_loaded', 'iis_blocks_load_textdomain' );
