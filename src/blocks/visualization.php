<?php

function iis_render_block_visualization( $attributes, $content ) {
	$attributes = array_merge(
		[
			'className' => '',
			'backgroundColor' => null,
		],
		$attributes
	);

	$class  = 'm-card m-card--padded';
	$class_name = '';

	if ( $attributes['backgroundColor'] && 'background-snow' != $attributes['backgroundColor'] ) {
		$class_name .= ' background-' . $attributes['backgroundColor'];
	}

	ob_start();
	?>

	<div class="wp-block-iis-card <?php imns( $class ); ?> background-<?php echo $attributes['backgroundColor']; ?> <?php echo iis_sanitize_html_classes( $attributes['className'] ); ?>">
		<div class="<?php imns( 'm-card__content' ); ?>">                        
			<?php echo $content; ?>
		</div>
	</div>
	<?php

	$content = ob_get_clean();

	return str_replace( [ "\t", "\n", "\r" ], '', $content );
}

register_block_type(
	'iis/visualization',
	[
		'render_callback' => 'iis_render_block_visualization',
	]
);
