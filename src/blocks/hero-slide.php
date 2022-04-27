<?php

function iis_render_hero_slide( $attributes, $content ) {
	$attributes = array_merge(
		[
			'className' => '',
			'mediaId'   => null,
			'title'     => '',
		],
		$attributes
	);

	$class = $attributes['className'] . ' glider-slide glider-slide--hero';
	$img   = null;

	if ( $attributes['mediaId'] ) {
		$img = wp_get_attachment_image( $attributes['mediaId'], 'hero', false, [ 'class' => 'glider-slide__image' ] );
	}

	ob_start();
	?>
	<div class="wp-block-iis-slide <?php echo iis_sanitize_html_classes( $class ); ?>">
		<div class="glider-slide__text">
			<span><?php echo $attributes['title']; ?></span>
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
