<?php

$attributes = array_merge(
	[
		'columnWidth' => '1/2',
		'className'   => '',
	],
	$attributes
);

switch ( $attributes['columnWidth'] ) {
	case '1/2':
		$grid_class = 'grid-18 grid-lg-9';
		break;
	case '1/3':
		$grid_class = 'grid-18 grid-lg-6';
		break;
	case '2/3':
		$grid_class = 'grid-18 grid-lg-12';
		break;
	default:
		$grid_class = 'grid-18';
		break;
}

ob_start();

$grid_class .= ' ' . $attributes['className'];

?>

	<div class="<?php echo iis_sanitize_html_classes( $grid_class ); ?>">
		<?php echo $content; ?>
	</div>

	<?php

echo ob_get_clean();
