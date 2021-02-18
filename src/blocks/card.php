<?php

function iis_render_card( $attributes, $content ) {
	$attributes = array_merge(
		[
			'align'      => 'center',
			'background' => false,
		],
		$attributes
	);

	$class = 'm-card';

	if ( $attributes['background'] ) {
		$class .= ' m-card--padded';
	}

	ob_start();
	?>
	<div class="align<?php echo esc_attr( $attributes['align'] ); ?>">
		<article class="wp-block-iis-card <?php imns( $class ); ?>">
			<div class="<?php imns( 'm-card__content' ); ?>">
				<?php echo $content; ?>
			</div>
		</article>
	</div>
	<?php

	return ob_get_clean();
}

register_block_type(
	'iis/card',
	[
		'render_callback' => 'iis_render_card',
	]
);
