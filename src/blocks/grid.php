<?php

function iis_render_grid( $attributes, $content ) {
	$attributes = array_merge(
		[
			'className' => '',
			'align'     => 'center',
		],
		$attributes
	);

	$class = $attributes['className'];

	if ( 'full' == $attributes['align'] ) {
		$class .= 'alignfull';
	}

	ob_start();
	?>
	<div class="wp-block-iis-grid <?php echo sanitize_html_classes( $class ); ?>">
		<div class="row">
			<?php echo $content; ?>
		</div>
	</div>
	<?php

	return ob_get_clean();
}

register_block_type(
	'iis/grid',
	[
		'render_callback' => 'iis_render_grid',
	]
);
