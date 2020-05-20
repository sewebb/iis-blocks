<?php

function iis_render_column( $_, $content ) {
	ob_start();
	?>
	<div class="grid">
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
