<?php

function iis_render_card( $attributes, $content ) {
	$attributes = array_merge(
		[
			'align'        => 'center',
			'background'   => false,
			'showAsTeaser' => false,
			'shadow'       => false,
		],
		$attributes
	);

	$class = 'm-card';

	if ( $attributes['showAsTeaser'] ) {
		$class .= ' m-card--teaser';
	} elseif ( $attributes['background'] ) {
		$class .= ' m-card--padded';
	}

	if ( 'wide' == $attributes['align'] && ! $attributes['showAsTeaser'] ) {
		$class .= ' m-card--wide';
	}

	if ( $attributes['shadow'] ) {
		$class .= ' m-card--shadow';
	}

	$image = null;

	if ( $attributes['imageId'] ) {
		$image_class = imns( 'm-card__image m-card__media', false );
		$image_size  = ( $attributes['showAsTeaser'] ) ? 'puff-teaser-image' : 'puff-image';
		$image_sizes = apply_filters( 'iis_blocks_puff_image_sizes', [ 'puff-image', 'puff-teaser-image', 'puff-image-4:3' ] );

		if ( null !== $attributes['imageSize'] && in_array( $attributes['imageSize'], $image_sizes, true ) ) {
			$image_size = $attributes['imageSize'];
		}

		$image = wp_get_attachment_image(
			$attributes['imageId'],
			$image_size,
			false,
			[ 'class' => $image_class ]
		);
	}

	ob_start();
	?>
	<div class="align<?php echo esc_attr( $attributes['align'] ); ?>">
		<article class="wp-block-iis-card <?php imns( $class ); ?>">
			<?php echo $image; ?>
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
