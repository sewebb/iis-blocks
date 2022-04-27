<?php

if ( ! function_exists( 'iis_sanitize_html_classes' ) ) {
	/**
	 * Like sanitize_html_class but works for multiple classes.
	 * Because sanitize_html_class doesn't allow spaces.
	 * Got function from here:
	 * https://github.com/wp-bootstrap/wp-bootstrap-navwalker/issues/285
	 *
	 * @param string|array $class    'navbar-collapse collapse' or array(  'navbar-collapse', 'collapse'  )
	 * @param mixed        $fallback Anything you want returned in case of a failure
	 *
	 * @return string
	 * @uses   sanitize_html_class
	 */
	function iis_sanitize_html_classes( $class, $fallback = null ) {
		// Explode it, if it's a string
		if ( is_string( $class ) ) {
			$class = explode( ' ', $class );
		}
		if ( is_array( $class ) && count( $class ) > 0 ) {
			$class = array_map( 'sanitize_html_class', $class );

			return implode( ' ', $class );
		} else {
			return sanitize_html_class( $class, $fallback );
		}
	}
}

require_once __DIR__ . '/download.php';
require_once __DIR__ . '/post-archive.php';
require_once __DIR__ . '/info.php';
require_once __DIR__ . '/button.php';
require_once __DIR__ . '/buttons.php';
require_once __DIR__ . '/hero.php';
require_once __DIR__ . '/puff.php';
require_once __DIR__ . '/grid.php';
require_once __DIR__ . '/column.php';
require_once __DIR__ . '/section.php';
require_once __DIR__ . '/section-header.php';
require_once __DIR__ . '/card.php';
require_once __DIR__ . '/testimonial.php';
require_once __DIR__ . '/glider.php';
require_once __DIR__ . '/glider-hero.php';
require_once __DIR__ . '/slide.php';
require_once __DIR__ . '/hero-slide.php';
require_once __DIR__ . '/icon.php';
require_once __DIR__ . '/news.php';
