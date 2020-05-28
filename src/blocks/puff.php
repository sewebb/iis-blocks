<?php

function iis_render_puff( $attributes ) {
	$attributes = array_merge([
		'postId'       => null,
		'showAsTeaser' => false,
		'alignment'    => null,
	], $attributes);

	$post           = get_post($attributes['postId']);
	$show_as_teaser = $attributes['showAsTeaser'];
	$title		    = $post->post_title;
	$permalink      = get_permalink($post);
	$media 		    = get_the_terms($post, 'media');
	$media_name 	= ! is_wp_error( $media ) ? $media[0]->name : 'article';
	$icon 			= 'arrow-variant';
	$class          = 'u-m-b-4';
	$align			= $attributes['align'] ?? '';

	if ( $align === 'right' ) {
		$class .= ' alignright';
	}

	if ($media_name === 'video') {
		$icon = 'play';
	} else if ($media_name === 'podcast') {
		$icon = 'podcast';
	}

	ob_start();

	if ( $show_as_teaser ) :
		$thumbnail = get_the_post_thumbnail($post, 'large', [ 'class' => imns( 'm-teaser__image', false ) ]);
		?>

		<?php if ($align) : ?>
		<div class="<?php echo $class; ?>">
		<?php endif; ?>
			<section class="<?php imns( 'm-teaser' ); ?>" id="post-<?php echo $attributes['postId']; ?>">
				<?php if ( $thumbnail ) echo $thumbnail; ?>
				<div class="<?php imns( 'm-teaser__caption' ); ?>">
					<a class="<?php imns( 'm-teaser__link' ); ?>" href="<?php echo $permalink; ?>">
						<h1 class="<?php imns( 'm-teaser__headline' ); ?>">
							<?php echo $title; ?>
							<svg class="<?php imns( 'icon m-teaser__headline__icon' ); ?>">
								<use xlink:href="#icon-<?php echo $icon; ?>"></use>
							</svg>
						</h1>
					</a>
				</div>
			</section>
		<?php if ($align) : ?>
		</div>
		<?php endif; ?>

		<?php
	else :
		$thumbnail 	= get_the_post_thumbnail($post, 'article-thumb', [ 'class' => imns( 'm-card__image', false ) ]);
		$excerpt	= $post->post_excerpt;
		$date 		= get_the_date(null, $post);
		$categories = get_the_category($post);
		?>

		<?php if ($align) : ?>
		<div class="<?php echo $class; ?>">
		<?php endif; ?>
			<article class="<?php imns( 'm-card m-card--padded' ); ?>" id="post-<?php echo $attributes['postId']; ?>">
				<?php if ( $thumbnail ) echo $thumbnail; ?>
				<div class="<?php imns( 'm-card__content' ); ?>">
					<?php if ( ! is_wp_error( $media ) ) : ?>
					<div class="<?php imns( 'm-card__meta' ); ?>">
						<div class="<?php imns( 'a-meta' ); ?>">
							<?php echo $date; ?>
						</div>
						<div class="<?php imns( 'a-meta a-meta--ruby' ); ?>">
							<svg class="<?php imns( 'icon' ); ?>">
								<use xlink:href="#icon-<?php echo $icon ?>"></use>
							</svg> <?php echo $media[0]->name; ?>
						</div>
					</div>
					<?php endif; ?>
					<?php if ( $permalink ) : ?>
						<a href="<?php echo $permalink; ?>" class="<?php imns( 'm-card__link' ); ?>"><h1 class="beta"><?php echo $title; ?></h1></a>
					<?php else : ?>
						<h1 class="beta"><?php echo $title; ?></h1>
					<?php endif; ?>

					<?php echo $excerpt; ?>
					<div class="<?php imns( 'm-card__tags' ); ?>">
						<?php if ( $categories ) : ?>
							<?php foreach ( $categories as $category ) : ?>
								<a href="<?php echo esc_url( get_tag_link( $category->term_id ) ); ?>" class="<?php imns( 'a-tag' ); ?>"><?php echo esc_html( $category->name ); ?></a>
							<?php endforeach; ?>
						<?php endif; ?>
					</div>
				</div>
			</article>
		<?php if ($align) : ?>
		</div>
		<?php endif; ?>
	<?php endif;
	return ob_get_clean();
}

register_block_type(
	'iis/puff',
	[
		'render_callback' => 'iis_render_puff',
	]
);
