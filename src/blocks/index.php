<?php

/**
 * Like sanitize_html_class but works for multiple classes.
 * Because sanitize_html_class doesn't allow spaces.
 * Got function from here:
 * https://github.com/wp-bootstrap/wp-bootstrap-navwalker/issues/285
 *
 * @uses   sanitize_html_class
 * @param  string|array $class    'navbar-collapse collapse' or array(  'navbar-collapse', 'collapse'  )
 * @param  mixed        $fallback Anything you want returned in case of a failure
 * @return string
 */
function sanitize_html_classes( $class, $fallback = null ) {
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

require_once __DIR__ . '/download.php';
require_once __DIR__ . '/post-archive.php';
require_once __DIR__ . '/info.php';
require_once __DIR__ . '/button.php';
require_once __DIR__ . '/hero.php';
require_once __DIR__ . '/puff.php';
require_once __DIR__ . '/grid.php';
require_once __DIR__ . '/column.php';
