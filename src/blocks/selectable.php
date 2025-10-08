<?php

function iis_render_selectable( $attributes, $content ) {
	$attributes = array_merge(
		[
			'className'  => '',
			'wrapped'      => false,
			'transparent' => false,
			'shadow' => 'small',
			'rounded' => false,
		],
		$attributes
	);

	$class = $attributes['className'];

	ob_start();
	?>
	<div class="wp-block-iis-selectable <?php echo iis_sanitize_html_classes( $class ); ?>">
		<?php echo $content; ?>
	</div>
	<?php

	return ob_get_clean();
}

register_block_type(
	'iis/selectable',
	[
		'render_callback' => 'iis_render_selectable',
	]
);
