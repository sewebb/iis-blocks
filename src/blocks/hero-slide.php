<?php

function iis_render_hero_slide( $attributes, $content ) {
	$attributes = array_merge(
		[
			'className' => '',
			'mediaId'   => null,
			'title'     => '',
			'linkColor' => null,
		],
		$attributes
	);

	$class = $attributes['className'] . ' glider-slide glider-slide--hero';
	$img   = null;
	$title = '<span>' . $attributes['title'] . '</span>';

	if ( null !== $attributes['linkColor'] ) {
		$dom = new DOMDocument();
		$dom->loadHTML( '<meta charset="utf8">' . $title );

		$span  = $dom->getElementsByTagName( 'span' );
		$links = $span[0]->getElementsByTagName( 'a' );

		foreach ( $links as $a ) {
			$a->setAttribute( 'class', $a->getAttribute( 'class' ) . ' color-' . $attributes['linkColor'] );
		}

		$title = $dom->saveHTML( $span[0] );
	}

	if ( $attributes['mediaId'] ) {
		$img = wp_get_attachment_image( $attributes['mediaId'], 'hero', false, [ 'class' => 'glider-slide__image' ] );
	}

	ob_start();
	?>
	<div class="wp-block-iis-slide <?php echo iis_sanitize_html_classes( $class ); ?>">
		<div class="glider-slide__text">
			<?php echo $title; ?>
		</div>
		<?php echo $img; ?>
	</div>
	<?php

	return ob_get_clean();
}

register_block_type(
	'iis/hero-slide',
	[
		'render_callback' => 'iis_render_hero_slide',
	]
);
