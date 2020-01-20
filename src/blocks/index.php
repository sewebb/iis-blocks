<?php

if ( ! function_exists( 'class_name' ) ) {
	/**
	 * Applies namespace to classes.
	 *
	 * @param string $class One or multiple classes separated by spaces.
	 *
	 * @return void
	 */
	function class_name($class)
	{
		$namespace = apply_filters( 'iis_blocks_namespace', 'iis-' );
		$classes = array_map(
			function ($single_class) use ($namespace) {
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
