<?php

function iis_render_block_download( $attributes ) {
	ob_start();
	?>
	<div class="<?php imns( 'm-download' ); ?>">
		<div class="row align-items-center justify-content-center">
			<div class="grid-auto">
				<figure class="<?php imns( 'm-download__icon-file' ); ?>">
					<svg class="<?php imns( 'icon' ); ?>"><use xlink:href="#icon-file"></use></svg>
				</figure>
			</div>
			<div class="grid u-position-static">
				<div class="row flex-column">
					<div class="grid-18 u-position-static">
						<a href="<?php echo esc_url( $attributes['file'] ); ?>" target="_blank" class="beta <?php imns( 'm-download__link' ); ?>">
							<span><?php echo esc_html( $attributes['title'] ); ?></span>
						</a>
					</div>
					<div class="grid-18  display-flex flex-column flex-sm-row justify-content-between align-items-start">
						<p class="u-m-b-0"><?php echo $attributes['content']; ?></p>
						<div class="display-flex align-self-end flex-nowrap <?php imns( 'm-download__trigger' ); ?>">
							<strong class="<?php imns( 'm-download__text' ); ?>">
								<?php echo esc_html( apply_filters( 'iis_blocks_download_btn', __( 'Download', 'iis-blocks' ) ) ); ?>
							</strong>
							<figure class="<?php imns( 'm-download__icon-download' ); ?>">
								<svg class="<?php imns( 'icon' ); ?>"><use xlink:href="#icon-download"></use></svg>
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
