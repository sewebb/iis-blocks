<?php

/*
 * Plugin Name: IIS Blocks
 * Description: Block library from Internetstiftelsen
 * Author: Internetstiftelsen
 * Author URI: https://internetstiftelsen.se
 * Version: 6.1.0
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
	add_image_size( 'puff-image', 700, 406, [ 'center', 'top' ] );
	add_image_size( 'puff-teaser-image', 426, 505, true );
	add_image_size( 'puff-image-4:3', 700, 525, [ 'center', 'top' ] );
	add_image_size( 'avatar', 36, 36, true );
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

	wp_set_script_translations( 'iis_blocks-js', 'iis-blocks', plugin_dir_path( __FILE__ ) . 'languages' );
}

/**
 * Register new block category "iis"
 *
 * @param  array $categories [description]
 * @return array
 */
function iis_blocks_categories( $categories ) {
	$category = array_search( 'iis', array_column( $categories, 'slug' ), true );

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

/**
 * Count number of words in string.
 * Multibyte version because str_word_count does not work with Swedish chars.
 * https://stackoverflow.com/questions/8290537/is-php-str-word-count-multibyte-safe
 */
if ( ! function_exists( 'iis_blocks_word_count' ) ) {
	function iis_blocks_word_count( $str ) {
		$str = wp_strip_all_tags( $str );
		return preg_match_all( '~[\p{L}\'\-\xC2\xAD]+~u', $str );
	}
}

/**
 * Get reading time for a post, in minutes.
 * Uses the calculation from https://blog.medium.com/read-time-and-you-bc2048ab620c.
 *
 * @param mixed Post id or WP_Post Post to get reading time for.
 * @return int Reading time in minutes.
 */
if ( ! function_exists( 'iis_blocks_get_post_reading_time' ) ) {
	function iis_blocks_get_post_reading_time( $post_id ) {
		// $reading_time_post = get_post($post_id);
		// Get the content and apply content filter so Gutenberg blocks are parsed.
		$content_html = get_the_content( null, false, $post_id );
		$content_html = apply_filters( 'the_content', $content_html );

		// Get number of images in text.
		if ( $content_html ) {
			$document = new DOMDocument();
			libxml_use_internal_errors( true );
			$document->loadHTML( $content_html );
			$images = $document->getElementsByTagName( 'img' );
			libxml_clear_errors();
			$images_count = count( $images );
		} else {
			$images_count = 0;
		}

		$words_count  = 0;
		$words_count += iis_blocks_word_count( get_the_title() );
		$words_count += iis_blocks_word_count( $content_html );

		$words_per_minute = 275;

		// Reading time for the text.
		$reading_time = $words_count / $words_per_minute;

		// Add reading time for images.
		$images_reading_time = iis_blocks_get_images_reading_time( $images_count, $words_per_minute );
		$reading_time       += $images_reading_time;

		// Check for grahps.
		if ( $content_html ) {
			$document = new DOMDocument();
			libxml_use_internal_errors( true );
			$document->loadHTML( $content_html );

			$xpath  = new \DOMXpath( $document );
			$graphs = $xpath->query( '//div[@class="wp-block-iis-graph"]' );

			libxml_clear_errors();
			$graphs_count = count( $graphs );

			// Each graph adds 10 seconds to reading time.
			$reading_time = $reading_time + ( $graphs_count * ( 10 / 60 ) );
		}

		return ceil( $reading_time );
	}
}

/**
 * Calculate reading time for images in minutes.
 *
 * Based on function from
 * https://github.com/yingles/reading-time-wp/blob/master/rt-reading-time.php
 *
 * @param int   $total_images number of images in post.
 * @param array $wpm words per minute.
 * @return int  Additional time in minutes added to the reading time by images.
 */
if ( ! function_exists( 'iis_blocks_get_images_reading_time' ) ) {
	function iis_blocks_get_images_reading_time( $total_images, $wpm ) {
		$additional_time = 0;
		// For the first image add 12 seconds, second image add 11, ..., for image 10+ add 3 seconds.
		for ( $i = 1; $i <= $total_images; $i++ ) {
			if ( $i >= 10 ) {
				$additional_time += 3 * (int) $wpm / 60;
			} else {
				$additional_time += ( 12 - ( $i - 1 ) ) * (int) $wpm / 60;
			}
		}

		return $additional_time / $wpm;
	}
}
