<?php

function iis_render_block_info( $attributes, $content ) {
	$namespace = apply_filters( 'iis_blocks_namespace', 'iis-' );
	return str_replace( 'iis-', $namespace, $content );
}

register_block_type(
	'iis/info',
	[
		'render_callback' => 'iis_render_block_info',
	]
);
