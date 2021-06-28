<?php

function iis_render_block_news( $attributes ) {
	$attributes = array_merge(
		[
			'postType' => 'post',
		],
		$attributes
	);

	return '<span>News</span>';
}

register_block_type(
	'iis/news',
	[
		'render_callback' => 'iis_render_block_news',
	]
);
