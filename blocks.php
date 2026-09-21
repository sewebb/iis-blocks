<?php

/*
 * Plugin Name: IIS Blocks
 * Description: Block library from Internetstiftelsen
 * Author: Internetstiftelsen
 * Author URI: https://internetstiftelsen.se
 * Version: 7.0.44
 * Plugin URI: https://github.com/sewebb/iis-blocks
 * Text Domain: iis-blocks
 * Domain Path: /languages/
 * Requires at least: 6.6
 */

require_once __DIR__ . '/src/classes/index.php';
require_once __DIR__ . '/src/helpers.php';

/**
 * Register image sizes
 */
function iis_blocks_register_sizes() {
	add_image_size( 'puff-image-large', 887, 514, [ 'center', 'top' ] );
	add_image_size( 'puff-image', 700, 406, [ 'center', 'top' ] );
	add_image_size( 'puff-teaser-image', 866, 1028, true );
	add_image_size( 'puff-image-4:3', 700, 525, [ 'center', 'top' ] );
	add_image_size( 'avatar', 36, 36, true );
}

add_action( 'after_setup_theme', 'iis_blocks_register_sizes' );

function iis_blocks_register_blocks() {
	foreach ( glob( __DIR__ . '/dist/blocks/*/block.json' ) as $metadata_file ) {
		register_block_type( $metadata_file );
	}
}

function iis_blocks_editor_scripts() {
	$asset = require __DIR__ . '/dist/editor/index.asset.php';

	wp_enqueue_script(
		'iis_blocks-js', // Handle.
		plugins_url( 'dist/editor/index.js', __FILE__ ),
		$asset['dependencies'],
		$asset['version']
	);

	wp_set_script_translations( 'iis_blocks-js', 'iis-blocks', plugin_dir_path( __FILE__ ) . 'languages' );
}

function iis_blocks_editor_styles() {
	if ( ! is_admin() ) {
		return;
	}

	wp_enqueue_style(
		'iis_blocks-css', // Handle.
		plugins_url( 'dist/editor/index.css', __FILE__ ),
		['wp-edit-blocks'],
		filemtime( __DIR__ . '/dist/editor/index.css' )
	);
}

/**
 * Register new block category "iis"
 *
 * @param  array $categories [description]
 * @return array
 */
function iis_blocks_categories( $categories ) {
	$category = array_search( 'iis', array_column( $categories, 'slug' ), true );

	if ( false !== $category ) {
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

add_filter( 'block_categories_all', 'iis_blocks_categories', 10 );
add_action( 'init', 'iis_blocks_register_blocks' );
add_action( 'enqueue_block_editor_assets', 'iis_blocks_editor_scripts', 5 );
add_action( 'enqueue_block_assets', 'iis_blocks_editor_styles' );

function iis_blocks_load_textdomain() {
	load_plugin_textdomain( 'iis-blocks', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
}

add_action( 'plugins_loaded', 'iis_blocks_load_textdomain' );
