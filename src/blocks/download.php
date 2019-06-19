<?php

function iis_render_block_download( $attributes ) {
	ob_start();
	?>
	<div class="iis-m-download">
		<div class="row align-items-center justify-content-center">
			<div class="grid-auto">
				<figure class="iis-m-download__icon-file">
					<svg class="iis-icon"><use xlink:href="#icon-file"></use></svg>
				</figure>
			</div>
			<div class="grid u-position-static">
				<div class="row flex-column">
					<div class="grid-18 u-position-static">
						<a href="<?php echo esc_url( $attributes['file'] ); ?>" class="beta iis-m-download__link">
							<span><?php echo esc_html( $attributes['title'] ); ?></span>
						</a>
					</div>
					<div class="grid-18  display-flex flex-column flex-sm-row justify-content-between align-items-start">
						<p class="u-m-b-0"><?php echo $attributes['content']; ?></p>
						<div class="display-flex align-self-end flex-nowrap iis-m-download__trigger">
							<strong class="iis-m-download__text"><?php esc_html_e( 'Download', 'iis' ); ?></strong>
							<figure class="iis-m-download__icon-download">
								<svg class="iis-icon"><use xlink:href="#icon-download"></use></svg>
							</figure>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<?php

	$content = ob_get_clean();

	return str_replace( [ "\t", "\n", "\r" ], '', $content );
}

register_block_type(
	'iis/download',
	[
		'render_callback' => 'iis_render_block_download',
	]
);
