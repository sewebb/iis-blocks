<?php

function iis_render_card( $attributes, $content ) {
	$attributes = array_merge(
		[
			'align'        => 'center',
			'background'   => false,
			'showAsTeaser' => false,
			'shadow'       => false,
			'title'        => '',
			'url'          => null,
			'target'       => '_self',
			'youtube'      => null,
		],
		$attributes
	);

	$class = 'm-card';

	if ( $attributes['showAsTeaser'] ) {
		$class .= ' m-card--teaser';
	} elseif ( $attributes['background'] ) {
		$class .= ' m-card--padded';
	}

	if ( 'wide' == $attributes['align'] && ! $attributes['showAsTeaser'] ) {
		$class .= ' m-card--wide';
	}

	if ( $attributes['shadow'] ) {
		$class .= ' m-card--shadow';
	}

	$image = null;
	$image_wrapper_class = imns( 'm-card__image m-card__media', false );

	if ( !empty( trim( $attributes['youtube'] ) ) ) {
		preg_match('#(?<=v=)[a-zA-Z0-9-]+(?=&)|(?<=v\/)[^&\n]+(?=\?)|(?<=v=)[^&\n]+|(?<=youtu.be/)[^&\n]+#', $attributes['youtube'], $matches);

		if ( $matches && isset( $matches[0] ) ) {
			$youtube_id = $matches[0];
			$image = "<img src=\"https://i3.ytimg.com/vi/{$youtube_id}/maxresdefault.jpg\" alt=\"\">";
			$image_wrapper_class .= ' ' . imns( 'm-icon-overlay', false );
		}
	}

	if ( null === $image && $attributes['imageId'] ) {
		$image_size  = ( $attributes['showAsTeaser'] ) ? 'puff-teaser-image' : 'puff-image';
		$image_class = imns( 'm-card__image m-card__media', false );

		$image = wp_get_attachment_image(
			$attributes['imageId'],
			$image_size,
			false,
			[ 'class' => $image_class ]
		);
	}

	$has_link = $attributes['url'] && ! empty( trim( $attributes['url'] ) );
	$title_class = ( $attributes['showAsTeaser'] ) ? 'alpha' : 'beta';

	ob_start();
	?>
	<div class="align<?php echo esc_attr( $attributes['align'] ); ?>">
		<article class="wp-block-iis-card <?php imns( $class ); ?>">
			<?php if ( $youtube_id ) : ?>
			<div class="<?php echo $image_wrapper_class; ?>" data-youtube="<?php echo esc_attr( $youtube_id ); ?>">
				<button class="<?php imns( 'm-icon-overlay__button' ); ?>" aria-label="play">
					<svg class="icon <?php imns( 'm-icon-overlay__icon' ); ?>">
						<use xlink:href="#icon-play"></use>
					</svg>
				</button>
				<?php echo $image; ?>
			</div>
			<?php
			else:
				echo $image;
			endif;

			?>
			<div class="<?php imns( 'm-card__content' ); ?>">
				<?php echo ( $has_link ) ? '<a href="' . esc_url( $attributes['url'] ) . '" class="' . imns( 'm-card__link', false ) . '" target="' . esc_attr( $attributes['target'] ) . '">' : ''; ?>
				<h1 class="<?php echo $title_class; ?>">
					<?php echo apply_filters( 'the_title', $attributes['title'] ); ?>
				</h1>
				<?php echo ( $has_link ) ? '</a>' : ''; ?>
				<?php echo $content; ?>
			</div>
		</article>
	</div>
	<?php

	return ob_get_clean();
}

register_block_type(
	'iis/card',
	[
		'render_callback' => 'iis_render_card',
	]
);
