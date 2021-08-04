<?php

function iis_render_block_news( $attributes ) {
	$attributes = array_merge(
		[
			'postType'     => 'post',
			'category'     => null,
			'pinned'       => null,
			'limit'        => 4,
			'firstWide'    => true,
			'displayDates' => false,
			'displayTags'  => false,
			'className'    => '',
		],
		$attributes
	);

	if ( $attributes['pinned'] ) {
		$pinned = get_post( $attributes['pinned'] );
	} else {
		$pinned = null;
	}

	$args = [
		'post_type'   => $attributes['postType'],
		'numberposts' => $attributes['limit'],
	];

	if ( $pinned ) {
		$args['numberposts'] -= 1;
		$args['post__not_in'] = [ $pinned->ID ];
	}

	if ( $attributes['category'] && 'post' === $attributes['postType'] ) {
		$args['category_name'] = $attributes['category'];
	}

	$posts = get_posts( $args );

	if ( $pinned ) {
		array_unshift( $posts, $pinned );
	}

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
