<?php

function iis_render_glider( $attributes, $content ) {
	$attributes = array_merge(
		[
			'className'  => '',
			'title'      => null,
			'pagination' => false,
		],
		$attributes
	);

	ob_start();
	?>
	<div class="wp-block-iis-glider alignwide <?php echo iis_sanitize_html_classes( $attributes['className'] ); ?>">
		<h2 class="alpha"><?php echo apply_filters( 'the_title', $attributes['title'] ); ?></h2>
		<div class="glider-contain">
			<a href="#" class="<?php imns( 'a-paging' ); ?> glider-nav js-glider-prev">
				<span class="u-visuallyhidden"><?php _e( 'Backward', 'iis-blocks' ); ?></span>
				<svg class="icon <?php imns( 'a-paging__icon' ); ?>">
					<use xlink:href="#icon-arrow-backwards"></use>
				</svg>
			</a>
			<div class="glider js-glider">
				<?php echo $content; ?>
			</div>
			<a href="#" class="<?php imns( 'a-paging' ); ?> glider-next js-glider-next">
				<span class="u-visuallyhidden"><?php _e( 'Forward', 'iis-blocks' ); ?></span>
				<svg class="icon <?php imns( 'a-paging__icon' ); ?>">
					<use xlink:href="#icon-arrow-forwards"></use>
				</svg>
			</a>
		</div>
		<?php if ( $attributes['pagination'] ) : ?>
			<div class="glider-dots"></div>
		<?php endif; ?>
	</div>
	<?php

	return ob_get_clean();
}

register_block_type(
	'iis/glider',
	[
		'render_callback' => 'iis_render_glider',
	]
);
