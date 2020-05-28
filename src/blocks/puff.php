<?php

function iis_render_puff( $attributes ) {
	$attributes = array_merge([
		'custom'       => false,
		'postId'       => null,
		'showAsTeaser' => false,
		'title'        => null,
		'text'         => null,
		'imageId'     => null,
		'alignment'    => null,
		'url'          => null,
		'align'        => null,
	], $attributes);

	$image_class = ($attributes['showAsTeaser']) ? imns( 'm-teaser__image', false ) : imns( 'm-card__image', false );
	$image_size = ( $attributes['showAsTeaser'] ) ? 'large' : 'puff-image';

	if ($attributes['custom']) {
		$image = wp_get_attachment_image(
			$attributes['imageId'],
			$image_size,
			false,
			[ 'class' => $image_class ]
		);

		$content = [
			'thumbnail'  => $image,
			'title'      => $attributes['title'],
			'text'       => $attributes['text'],
			'permalink'  => $attributes['url'],
			'icon'       => 'arrow-forwards',
			'date'       => null,
			'categories' => null,
			'media'      => null,
		];
	} else {
		$post       = get_post($attributes['postId']);
		$media      = get_the_terms( $post, 'media' );
		$icon       = ! is_wp_error( $media ) && $media[0]->name === 'video' ? 'play' : 'arrow-forwards';
		$date 		= get_the_date( null, $post );
		$categories = get_the_category( $post );
		$thumbnail  = get_the_post_thumbnail(
			$post,
			$image_size,
			[ 'class' => $image_class ]
		);

		$content    = [
			'thumbnail'  => $thumbnail,
			'title'      => $post->post_title,
			'text'       => $post->post_excerpt,
			'permalink'  => get_permalink($post),
			'icon'       => $icon,
			'date'       => $date,
			'categories' => $categories,
			'media'      => $media,
		];
	}

	$class = 'u-m-b-4';

	if ( $attributes['align'] === 'right' ) {
		$class .= ' alignright';
	}

	ob_start();

	if ( $attributes['showAsTeaser'] ) : ?>
		<div class="<?php echo $class; ?>">
			<figure class="<?php imns( 'm-teaser' ); ?>" id="post-<?php echo $attributes['postId'] ?? 'custom'; ?>">
				<?php if ( $content['thumbnail'] ) echo $content['thumbnail']; ?>
				<figcaption class="<?php imns( 'm-teaser__caption' ); ?>">
					<div class="<?php imns( 'm-teaser__overlay' ); ?>">
						<a class="<?php imns( 'm-teaser__link' ); ?>" href="<?php echo $content['permalink']; ?>">
							<div class="<?php imns( 'm-teaser__headline-wrapper' ); ?>">
								<h1 class="<?php imns( 'm-teaser__headline' ); ?>">
									<?php echo $content['title']; ?>
								</h1>
							</div>
							<?php if ( $content['text'] ) : ?>
								<div class="<?php imns( 'm-teaser__excerpt-wrapper' ); ?>">
									<p class="<?php imns( 'm-teaser__excerpt' ); ?>">
										<?php echo $content['text']; ?>
									</p>
								</div>
							<?php endif; ?>
						</a>
					</div>
				</figcaption>
			</figure>
		</div>

		<?php
	else :
		?>

		<div class="<?php echo $class; ?>">
			<article class="<?php imns( 'm-card m-card--padded' ); ?>" id="post-<?php echo $attributes['postId'] ?? 'custom'; ?>">
				<?php if ( $content['thumbnail'] ) echo $content['thumbnail']; ?>
				<div class="<?php imns( 'm-card__content' ); ?>">
					<?php if ( $content['media'] && ! is_wp_error( $content['media'] ) ) : ?>
					<div class="<?php imns( 'm-card__meta' ); ?>">
						<div class="<?php imns( 'a-meta' ); ?>">
							<?php echo $content['date']; ?>
						</div>
						<div class="<?php imns( 'a-meta a-meta--ruby' ); ?>">
							<svg class="<?php imns( 'icon' ); ?>">
								<use xlink:href="#icon-<?php echo $content['icon'] ?>"></use>
							</svg> <?php echo $content['media'][0]->name; ?>
						</div>
					</div>
					<?php endif; ?>
					<?php if ( $content['permalink'] ) : ?>
						<a href="<?php echo $content['permalink']; ?>" class="<?php imns( 'm-card__link' ); ?>">
							<h1 class="beta"><?php echo $content['title']; ?></h1>
						</a>
					<?php else : ?>
						<h1 class="beta"><?php echo $content['title']; ?></h1>
					<?php endif; ?>

					<?php echo $content['text']; ?>
					<div class="<?php imns( 'm-card__tags' ); ?>">
						<?php if ( $content['categories'] ) : ?>
							<?php foreach ( $content['categories'] as $category ) : ?>
								<a href="<?php echo esc_url( get_tag_link( $category->term_id ) ); ?>" class="<?php imns( 'a-tag' ); ?>"><?php echo esc_html( $category->name ); ?></a>
							<?php endforeach; ?>
						<?php endif; ?>
					</div>
				</div>
			</article>
		</div>
	<?php endif;
	return ob_get_clean();
}

register_block_type(
	'iis/puff',
	[
		'render_callback' => 'iis_render_puff',
	]
);
