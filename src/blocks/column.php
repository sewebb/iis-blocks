<?php

function iis_render_column( $_, $content ) {
	$column_width 	= isset($_['columnWidth']) ? $_['columnWidth'] : '1/3';
	$grid_class 	= $column_width === '1/3' ? 'grid-18 grid-md-6' : 'grid-18 grid-md-9';

	ob_start();
	?>

	<div class="<?php echo $grid_class; ?>">
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
