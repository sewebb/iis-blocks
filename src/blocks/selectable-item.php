<?php

function iis_render_selectable_item( $attributes, $content ) {
	$attributes = array_merge(
		[
			'className'  => '',
		],
		$attributes,
	);

	$class = $attributes['className'];

	ob_start();
	?>
	<div class="wp-block-iis-selectable-item <?php echo iis_sanitize_html_classes( $class ); ?>">
		<?php echo $content; ?>
	</div>
	<?php

	return ob_get_clean();
}

register_block_type(
	'iis/selectable-item',
	[
		'render_callback' => 'iis_render_selectable_item',
	]
);
