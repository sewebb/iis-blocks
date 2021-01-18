<?php

/**
 * Render Puff block
 *
 * @param  array $attributes  Block settings
 * @return string             HTML for block
 */
function iis_render_puff( $attributes, $inner_content ) {
	$attributes = array_merge(
		[
			'custom'         => false,
			'postId'         => null,
			'showAsTeaser'   => false,
			'showOnMobile'   => false,
			'displayTags'    => false,
			'displayExcerpt' => true,
			'displayDates'   => false,
			'title'          => null,
			'text'           => null,
			'imageId'        => null,
			'imageSize'      => null,
			'alignment'      => null,
			'url'            => null,
			'align'          => null,
			'className'      => '',
			'button'         => false,
		],
		$attributes
	);

	$image_class = imns( 'm-card__image m-card__media', false );
	$image_size  = ( $attributes['showAsTeaser'] ) ? 'puff-teaser-image' : 'puff-image';
	$image_sizes = apply_filters( 'iis_blocks_puff_image_sizes', [ 'puff-image', 'puff-teaser-image', 'puff-image-4:3' ] );

	if ( null !== $attributes['imageSize'] && in_array( $attributes['imageSize'], $image_sizes, true ) ) {
		$image_size = $attributes['imageSize'];
	}

	if ( $attributes['custom'] ) {
		$image = wp_get_attachment_image(
			$attributes['imageId'],
			$image_size,
			false,
			[ 'class' => $image_class ]
		);

		$content = [
			'thumbnail'  => $image,
			'title'      => $attributes['title'],
			'text'       => ( ! empty( $attributes['text'] ) ) ? $attributes['text'] : null,
			'permalink'  => $attributes['url'],
			'icon'       => 'arrow-forwards',
			'date'       => null,
			'categories' => null,
			'media'      => null,
		];
	} else {
		$post = get_post( $attributes['postId'] );

		$media = get_the_terms( $post, 'media' );
		if ( false !== $media ) {
			$media_name = ! is_wp_error( $media ) ? $media[0]->name : 'article';
		} else {
			$media_name = 'article';
		}

		$icon       = 'arrow-variant';
		$date       = get_the_date( null, $post );
		$taxonomies = apply_filters( 'iis_blocks_puff_taxonomies', 'category' );
		$categories = ( $attributes['displayTags'] && ! $attributes['showAsTeaser'] ) ? wp_get_post_terms( $post->ID, $taxonomies ) : null;
		$thumbnail  = get_the_post_thumbnail(
			$post,
			$image_size,
			[ 'class' => $image_class ]
		);

		if ( 'video' == $media_name ) {
			$icon = 'play';
		} elseif ( 'podcast' == $media_name ) {
			$icon = 'podcast';
		}

		$content = [
			'thumbnail'  => $thumbnail,
			'title'      => $post->post_title,
			'text'       => ( $attributes['displayExcerpt'] && ! empty( $post->post_excerpt ) ) ? $post->post_excerpt : null,
			'permalink'  => get_permalink( $post ),
			'icon'       => $icon,
			'date'       => $date,
			'categories' => $categories,
			'media'      => $media,
		];
	}

	$class  = $attributes['className'];
	$class .= ( in_array( $attributes['align'], [ 'right', 'wide' ], true ) ) ? ' align' . $attributes['align'] : '';

	if ( 'right' == $attributes['align'] && ! $attributes['showOnMobile'] ) {
		$class .= ' u-hide-sm';
	}

	$card_class = 'm-card';

	if ( 'wide' == $attributes['align'] && ! $attributes['showAsTeaser'] ) {
		$card_class .= ' m-card--wide';
	}

	if ( $attributes['showAsTeaser'] ) {
		$card_class .= ' m-card--teaser';
	} else {
		$card_class .= ' m-card--padded';
	}

	$headline_size = ( $attributes['showAsTeaser'] ) ? 'alpha' : 'beta';
	$card_text_class = ( $attributes['showAsTeaser'] ) ? 'm-card__text !u-hide-md' : 'm-card__text';

	ob_start(); ?>
	<div class="<?php imns( $card_class ); ?> <?php echo iis_sanitize_html_classes( $class ); ?>" id="post-<?php echo $attributes['postId'] ?? 'custom'; ?>">
		<?php

		if ( $content['thumbnail'] ) {
			echo $content['thumbnail'];
		}

		?>
		<div class="<?php imns( 'm-card__content' ); ?>">
			<?php if ( $content['media'] && ! is_wp_error( $content['media'] ) ) : ?>
				<div class="<?php imns( 'm-card__meta' ); ?>">
					<div class="<?php imns( 'a-meta' ); ?>">
						<?php echo $content['date']; ?>
					</div>
					<div class="<?php imns( 'a-meta a-meta--ruby' ); ?>">
						<svg class="<?php imns( 'icon' ); ?>">
							<use xlink:href="#icon-<?php echo $content['icon']; ?>"></use>
						</svg> <?php echo $content['media'][0]->name; ?>
					</div>
				</div>
			<?php elseif ( $post && $attributes['displayDates'] && $content['date'] ) : ?>
				<time datetime="<?php echo $post->post_date; ?>" class="<?php imns( 'a-meta' ); ?>">
					<?php echo $content['date']; ?>
				</time>
			<?php endif; ?>
			<?php if ( $content['permalink'] ) : ?>
				<a href="<?php echo $content['permalink']; ?>" class="<?php imns( 'm-card__link' ); ?>">
					<h2 class="<?php echo $headline_size; ?>">
						<?php echo $content['title']; ?>

						<?php if ( $attributes['showAsTeaser'] ) : ?>
							<svg class="<?php imns( 'icon m-card__headline__icon' ); ?>">
								<use xlink:href="#icon-arrow-forwards"></use>
							</svg>
						<?php endif; ?>
					</h2>
				</a>
			<?php else : ?>
				<h2 class="<?php echo $headline_size; ?>">
					<?php echo $content['title']; ?>
					<?php if ( $attributes['showAsTeaser'] && $attributes['url'] ) : ?>
						<svg class="<?php imns( 'icon m-card__headline__icon' ); ?>">
							<use xlink:href="#icon-arrow-forwards"></use>
						</svg>
					<?php endif; ?>
				</h2>
			<?php endif; ?>
			<?php if ( $content['text'] ) : ?>
				<p class="<?php imns( $card_text_class ); ?>"><?php echo $content['text']; ?></p>
			<?php endif; ?>
			<?php if ( $content['categories'] || $attributes['button'] ) : ?>
				<div class="<?php imns( 'm-card__bottom' ); ?>">
					<?php

					if ( $content['categories'] ) :
						foreach ( $content['categories'] as $category ) :
							?>
							<a href="<?php echo esc_url( get_tag_link( $category->term_id ) ); ?>" class="<?php imns( 'a-tag' ); ?>"><?php echo esc_html( $category->name ); ?></a>
						<?php
						endforeach;
					endif;
					?>
					<?php

					if ( $attributes['button'] ) {
						echo $inner_content;
					}

					?>
				</div>
			<?php endif; ?>
		</div>
	</div>
	<?php

	return ob_get_clean();
}

register_block_type(
	'iis/puff',
	[
		'render_callback' => 'iis_render_puff',
	]
);
