<?php

if ( ! function_exists( 'imns' ) ) {
	/**
	 * Get and echo the styleguide namespace, set in .env-file of the theme
	 *
	 * @param  string $class Class names, separated by space
	 * @return void
	 */
	function imns( $class ) {
		$namespace = apply_filters( 'iis_blocks_namespace', env( 'IIS_NAMESPACE', 'iis-' ) );
		$classes   = array_map(
			function ( $single_class ) use ( $namespace ) {
				return $namespace . $single_class;
			},
			explode( ' ', $class )
		);

		echo esc_attr( implode( ' ', $classes ) );
	}
}

require_once __DIR__ . '/download.php';
require_once __DIR__ . '/post-archive.php';
require_once __DIR__ . '/newsletter.php';
require_once __DIR__ . '/info.php';
require_once __DIR__ . '/button.php';
