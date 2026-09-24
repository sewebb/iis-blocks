<?php

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

if ( $attributes['mediaId'] ) {
	$img = wp_get_attachment_image( $attributes['mediaId'], 'hero', false, [ 'class' => 'glider-slide__image' ] );
}

ob_start();
?>
	<div class="wp-block-iis-slide <?php echo iis_sanitize_html_classes( $class ); ?>">
		<div class="glider-slide__text">
			<span class="u-link-color-<?php echo $attributes['linkColor']; ?>"><?php echo $attributes['title']; ?></span>
		</div>
		<?php echo $img; ?>
	</div>
	<?php

echo ob_get_clean();
