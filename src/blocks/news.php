<?php

function iis_render_block_news( $attributes ) {
	$attributes = array_merge(
		[
			'postType'     => 'post',
			'limit'        => 4,
			'firstWide'    => true,
			'displayDates' => false,
			'displayTags'  => false,
			'className'    => '',
		],
		$attributes
	);

	$posts = get_posts(
		[
			'post_type'   => $attributes['postType'],
			'numberposts' => $attributes['limit'],
		]
	);

	ob_start();

	$i = 0;

	?>
	<div class="wp-block-iis-news <?php echo iis_sanitize_html_classes( $attributes['className'] ); ?> wp-block-iis-grid">
		<div class="row">
			<?php foreach ( $posts as $item ) : ?>
			<div class="grid-18 <?php echo ( $i === 0 && $attributes['firstWide'] ) ? '' : 'grid-lg-6'; ?>">
				<?php

					echo render_block(
						[
							'blockName' => 'iis/puff',
							'attrs' => [
								'postId'       => $item->ID,
								'displayTags'  => $attributes['displayTags'],
								'displayDates' => $attributes['displayDates'],
								'align'        => ( $i === 0 && $attributes['firstWide'] ) ? 'wide' : null,
							],
						]
					);

				?>
			</div>
			<?php $i++; endforeach; ?>
			<div class="grid-18">
				<div>
					<a class="<?php imns( 'a-button a-button--lemon' ); ?>" href="<?php echo get_post_type_archive_link( $attributes['postType'] ); ?>">
						<span class="<?php imns( 'a-button__text' ); ?>"><?php _e( 'Show more', 'iis-blocks' ); ?></span>
					</a>
				</div>
			</div>
		</div>
	</div>
	<?php

	$content = ob_get_clean();

	return str_replace( [ "\t", "\n", "\r" ], '', $content );
}

register_block_type(
	'iis/news',
	[
		'render_callback' => 'iis_render_block_news',
	]
);
