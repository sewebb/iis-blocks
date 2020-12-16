<?php

function iis_render_block_section_header( $attributes ) {
	$attributes = array_merge(
		[
			'title' => '',
			'text' => '',
			'preTitle' => '',
		],
		$attributes
	);

	ob_start();
	?>
	<div class="alignfull">
		<div class="wrapper">
			<div class="row">
				<div class="grid-18 grid-md-8 offset-md-1">
					<?php if ( ! empty( $attributes['preTitle'] ) ) : ?>
						<strong class="<?php imns( 'a-meta' ); ?>">
							<?php echo esc_html( strip_tags( $attributes['preTitle'] ) ); ?>
						</strong>
					<?php endif; ?>
					<h1 class="supersize"><?php echo apply_filters( 'the_title', $attributes['title'] ); ?></h1>
					<p>
						<?php echo wp_kses_post( $attributes['text'] ); ?>
					</p>
				</div>
			</div>
		</div>
	</div>
	<?php

	return ob_get_clean();
}

register_block_type(
	'iis/section-header',
	[
		'render_callback' => 'iis_render_block_section_header',
	]
);
