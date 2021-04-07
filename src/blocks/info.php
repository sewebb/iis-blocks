<?php

function iis_render_block_info( $attributes, $content ) {
	return str_replace( 'iis-m-info', imns( 'm-info', false ), $content );
}

register_block_type(
	'iis/info',
	[
		'render_callback' => 'iis_render_block_info',
	]
);
