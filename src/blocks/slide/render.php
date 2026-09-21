<?php

$attributes = array_merge(
	[
		'className' => '',
	],
	$attributes
);

$class = $attributes['className'] . ' glider-slide glider-slide--stretch-items';

ob_start();
?>
	<div class="wp-block-iis-slide <?php echo iis_sanitize_html_classes( $class ); ?>">
		<?php echo $content; ?>
	</div>
	<?php

echo ob_get_clean();
