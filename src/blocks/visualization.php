<?php

function iis_render_block_visualization( $attributes, $content ) {
	$attributes = array_merge(
		[
			'className' => '',
			'backgroundColor' => null,
			'padding' => '',
			'align' => '',
			'link' => '',
			'linkText' => '',
			'target' => '_self'
		],
		$attributes
	);

	$class  = 'm-card m-card--padded';
	$class .= ( in_array( $attributes['align'], [ 'right' ], true ) ) ? ' !align' . $attributes['align'] : '';
	$class_name = 'wp-block-iis-visualization';

	if ( $attributes['backgroundColor'] )  {
		$class_name .= ' background-' . $attributes['backgroundColor'];
	}

	if ( $attributes['padding'] ) {
		$class_name .= ' wp-block-iis-visualization' . $attributes['padding'];
	}

	ob_start();
	?>

	<div class="<?php imns( $class ); ?> <?php echo $class_name; ?> <?php echo iis_sanitize_html_classes( $attributes['className'] ); ?>">

		<div class="<?php imns( 'm-card__content' ); ?>">
			<?php echo $content; ?>
		</div>
		<?php if ( ! empty( $attributes['link'] ) ) : ?>
			<a href="<?php echo esc_url( $attributes['link'] ); ?>" class="u-link-area" <?php iis_rel_noopener( $attributes['target'] ); ?> target="<?php echo esc_html( $attributes['target'] ); ?>"><span class="u-visuallyhidden"><?php echo esc_html( $attributes['linkText'] ); ?></span></a>
		<?php endif; ?>
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
