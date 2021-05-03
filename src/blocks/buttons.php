<?php

function iis_render_buttons( $attributes, $content ) {
	ob_start();
	?>
	<div class="wp-block-iis-buttons row <?php imns( 'm-buttons' ); ?>">
		<?php echo str_replace( '<div><a', '<div class="grid-auto"><a', $content ); ?>
	</div>
	<?php

	return ob_get_clean();
}

register_block_type(
	'iis/buttons',
	[
		'render_callback' => 'iis_render_buttons',
	]
);
