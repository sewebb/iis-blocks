<?php

function iis_render_column( $attributes, $content ) {
	$column_width 	= $attributes['columnWidth'] ?? '';

	$grid_class = '';
	switch ($column_width) {
		case '1/2':
			$grid_class = 'grid-18 grid-md-9';
			break;
	    case '1/3':
	        $grid_class = 'grid-18 grid-md-6';
	        break;
		default:
			$grid_class = 'grid-18';
			break;
	}

	ob_start();
	?>

	<div class="<?php echo $grid_class; ?> u-m-b-4">
		<?php echo $content; ?>
	</div>

	<?php

	return ob_get_clean();
}

register_block_type(
	'iis/column',
	[
		'render_callback' => 'iis_render_column',
	]
);
