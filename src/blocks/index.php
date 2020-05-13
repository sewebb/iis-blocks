<?php

if ( ! function_exists( 'imns' ) ) {
	/**
	 * Get and echo the styleguide namespace, set in .env-file of the theme
	 *
	 * @param string $class Class names, separated by space
	 * @param bool $echo
	 * @return void|string
	 */
	function imns( $class, $echo = true ) {
		$namespace = apply_filters( 'iis_blocks_namespace', env( 'IIS_NAMESPACE', 'iis-' ) );
		$classes   = array_map(
			function ( $single_class ) use ( $namespace ) {
				return $namespace . $single_class;
			},
			explode( ' ', $class )
		);

		$classes = esc_attr( implode( ' ', $classes ) );

		if ($echo) {
			echo $classes;

			return;
		}

		return $classes;
	}
}

require_once __DIR__ . '/download.php';
require_once __DIR__ . '/post-archive.php';
require_once __DIR__ . '/newsletter.php';
require_once __DIR__ . '/info.php';
require_once __DIR__ . '/button.php';
require_once __DIR__ . '/hero.php';
