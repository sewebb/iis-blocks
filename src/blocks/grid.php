<?php

function iis_render_grid( $attributes, $content ) {
	$attributes = array_merge(
		[
			'className'  => '',
			'align'      => 'center',
			'asymmetric' => false,
		],
		$attributes
	);

	$class = $attributes['className'];

	if ( 'full' == $attributes['align'] ) {
		$class .= 'alignfull';
	}

	$row_class = 'row';

	if ( $attributes['asymmetric'] ) {
		$row_class .= ' asymmetric-md';
	}

	ob_start();
	?>
	<div class="wp-block-iis-grid <?php echo iis_sanitize_html_classes( $class ); ?>">
		<div class="<?php echo $row_class; ?>">
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
