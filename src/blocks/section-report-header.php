<?php

function iis_render_block_section_report_header( $attributes ) {
	$attributes = array_merge(
		[
			'title' => '',
			'text' => '',
		],
		$attributes
	);

	ob_start();
	?>
	<div class="alignfull">
		<div class="wrapper">
			<div class="row">
				<div class="grid-18 grid-md-12 grid-lg-10 grid-xl-8">
					<div class="<?php imns( 'a-meta' ); ?>">
						<svg class="<?php imns( 'icon' ); ?>">
							<use xlink:href="#icon-time"></use>
						</svg>
						<x-reading-time />
					</div>
					<header class="supersize"><?php echo apply_filters( 'the_title', $attributes['title'] ); ?></header>
					<p class="preamble">
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
	'iis/section-report-header',
	[
		'render_callback' => 'iis_render_block_section_report_header',
	]
);
