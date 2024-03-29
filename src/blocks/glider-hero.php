<?php

function iis_render_glider_hero( $attributes, $content ) {
	$attributes = array_merge(
		[
			'autoScrollTime' => null,
			'className'      => '',
		],
		$attributes
	);

	ob_start();
	?>
	<div class="wp-block-iis-glider-hero alignfull <?php echo iis_sanitize_html_classes( $attributes['className'] ); ?>">
		<div class="glider-hero-contain u-p-x-0">
			<button type="button" class="<?php imns( 'a-paging' ); ?> glider-nav glider-nav--hero glider-prev js-glider-prev rs_skip">
				<span class="u-visuallyhidden"><?php _e( 'Backward', 'iis-blocks' ); ?></span>
				<svg class="icon <?php imns( 'a-paging__icon' ); ?>">
					<use xlink:href="#icon-arrow-backwards"></use>
				</svg>
			</button>
			<div class="glider js-glider-hero" <?php echo ( $attributes['autoScrollTime'] ) ? 'data-timeout="' . esc_attr( $attributes['autoScrollTime'] ) . '"' : ''; ?>>
				<?php echo $content; ?>
			</div>
			<button type="button" class="<?php imns( 'a-paging' ); ?> glider-nav glider-nav--hero glider-next js-glider-next rs_skip">
				<span class="u-visuallyhidden"><?php _e( 'Forward', 'iis-blocks' ); ?></span>
				<svg class="icon <?php imns( 'a-paging__icon' ); ?>">
					<use xlink:href="#icon-arrow-forwards"></use>
				</svg>
			</button>
		</div>
	</div>
	<?php

	return ob_get_clean();
}

register_block_type(
	'iis/glider-hero',
	[
		'render_callback' => 'iis_render_glider_hero',
	]
);
