<?php

$attributes = array_merge(
	[
		'className'  => '',
		'title'      => '',
	],
	$attributes,
);

if ( ! $attributes['title'] ) {
	return;
}

$class = $attributes['className'];
$slug = sanitize_title( $attributes['title'] );

ob_start();
?>
	<div class="wp-block-iis-selectable-item <?php echo iis_sanitize_html_classes( $class ); ?> <?php imns( 'o-selectable__item' ); ?>" id="<?php echo esc_attr( $slug ); ?>" data-selectable-item="<?php echo esc_attr( $attributes['title'] ); ?>">
		<?php echo $content; ?>
	</div>
	<?php

echo ob_get_clean();
