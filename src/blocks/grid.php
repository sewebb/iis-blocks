<?php

function iis_render_grid( $_, $content ) {
	ob_start();
	?>
	<div class="<?php imns( 'section section--tight' ); ?>">
		<div class="wrapper">
			<div class="row">
				<?php echo $content; ?>
			</div>
		</div>
	</div>
	<?php

	return ob_get_clean();
}

register_block_type(
	'iis/grid',
	[
		'render_callback' => 'iis_render_grid',
	]
);
