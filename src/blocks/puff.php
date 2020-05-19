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
	$icon 		    = ! is_wp_error( $media ) && $media[0]->name === 'video' ? 'play' : 'arrow-forwards';
	$class          = 'u-m-b-4';

	if ( $attributes['align'] === 'right' ) {
		$class .= ' alignright';
	}

	ob_start();

	if ( $show_as_teaser ) :
		$thumbnail = get_the_post_thumbnail($post, 'large', [ 'class' => imns( 'm-teaser__image', false ) ]);
		?>

		<div class="<?php echo $class; ?>">
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
		</div>

		<?php
	else :
		$thumbnail 	= get_the_post_thumbnail($post, 'article-thumb', [ 'class' => imns( 'm-card__image', false ) ]);
		$excerpt	= $post->post_excerpt;
		$categories = get_the_category($post);
		?>

		<div class="<?php echo $class; ?>">
			<article class="<?php imns( 'm-card m-card--padded' ); ?>" id="post-<?php echo $attributes['postId']; ?>">
				<?php if ($thumbnail) { echo $thumbnail; } ?>
				<div class="<?php imns( 'm-card__content' ); ?>">
					<div class="<?php imns( 'a-meta' ); ?>">
					<span class="<?php imns( 'a-meta__term' ); ?>">
						<svg class="<?php imns( 'icon a-meta__icon' ); ?>">
							<use xlink:href="#icon-<?php echo $icon ?>"></use>
						</svg>
						<?php if ( ! is_wp_error( $media ) ) echo $media[0]->name; ?>
					</span>
					</div>
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
