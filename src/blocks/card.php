<?php

function iis_render_card( $attributes, $content ) {
	$attributes = array_merge(
		[
			'align'        => 'center',
			'background'   => false,
			'showAsTeaser' => false,
			'shadow'       => false,
			'title'        => '',
			'text'         => null,
			'imageId'      => null,
			'imageSize'    => null,
			'url'          => null,
			'target'       => '_self',
			'youtube'      => null,
			'pretitle'     => null,
			'className'    => '',
		],
		$attributes
	);

	$class  = 'm-card';
	$class .= ( in_array( $attributes['align'], [ 'right', 'wide' ], true ) ) ? ' !align' . $attributes['align'] : '';

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

	$image               = null;
	$image_wrapper_class = imns( 'm-card__image m-card__media', false );
	$youtube_id          = null;

	if ( ! empty( trim( $attributes['youtube'] ?? '' ) ) ) {
		preg_match( '#(?<=v=)[a-zA-Z0-9-]+(?=&)|(?<=v\/)[^&\n]+(?=\?)|(?<=v=)[^&\n]+|(?<=youtu.be/)[^&\n]+#', $attributes['youtube'], $matches );

		if ( $matches && isset( $matches[0] ) ) {
			$youtube_id    = $matches[0];
			$base_url      = "https://i3.ytimg.com/vi/{$youtube_id}";
			$webp_base_url = "https://i3.ytimg.com/vi_webp/{$youtube_id}";
			$fallback_img  = "{$base_url}/hqdefault.jpg";

			$urls = [
				"{$webp_base_url}/maxresdefault.webp",
				"{$base_url}/maxresdefault.jpg",
				"{$webp_base_url}/hqdefault.webp",
			];

			$transient_key = 'yt_thumb_' . md5( $youtube_id );
			$yt_thumb_url  = get_transient( $transient_key );
			if ( false === $yt_thumb_url ) {
				$found = false;
				foreach ( $urls as $url ) {
					$response = wp_remote_head( $url );
					if ( ! is_wp_error( $response ) && wp_remote_retrieve_response_code( $response ) === 200 ) {
						$yt_thumb_url = $url;
						$found        = true;
						break;
					}
				}
				if ( ! $found ) {
					$yt_thumb_url = $fallback_img;
				}
				$cache_lifetime = WEEK_IN_SECONDS + wp_rand( -DAY_IN_SECONDS, DAY_IN_SECONDS );
				set_transient( $transient_key, $yt_thumb_url, $cache_lifetime );
			}

			// if maxresdefault is used then set width/height to 1280x720, otherwise use 480x360
			$use_maxres = ( false !== strpos( $yt_thumb_url, 'maxresdefault' ) );
			if ( $use_maxres ) {
				$width  = 1280;
				$height = 720;
			} else {
				$width  = 480;
				$height = 360;
			}

			$image = sprintf(
				'<img width="%d" height="%d" loading="lazy" src="%s" alt="%s">',
				(int) $width,
				(int) $height,
				esc_url( $yt_thumb_url ),
				esc_attr( 'tumnagel för video' )
			);

			$image_wrapper_class .= ' ' . imns( 'm-icon-overlay', false );
		}
	}

	if ( null === $image && $attributes['imageId'] ) {
		$image_size  = ( $attributes['showAsTeaser'] ) ? 'puff-teaser-image' : 'puff-image';
		$image_sizes = apply_filters( 'iis_blocks_puff_image_sizes', [ 'puff-image-large', 'puff-image', 'puff-teaser-image', 'puff-image-4:3' ] );

		if ( null !== $attributes['imageSize'] && in_array( $attributes['imageSize'], $image_sizes, true ) ) {
			$image_size = $attributes['imageSize'];
		}

		$image_class = imns( 'm-card__image m-card__media', false );

		$image = wp_get_attachment_image(
			$attributes['imageId'],
			$image_size,
			false,
			[ 'class' => $image_class ]
		);
	}

	$has_link    = $attributes['url'] && ! empty( trim( $attributes['url'] ) );
	$title_class = ( $attributes['showAsTeaser'] ) ? 'alpha' : 'beta';
	$pretitle    = ( $attributes['pretitle'] ) ? trim( $attributes['pretitle'] ) : '';

	ob_start();
	?>
	<article class="wp-block-iis-card <?php imns( $class ); ?> <?php echo iis_sanitize_html_classes( $attributes['className'] ); ?>">
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
		else :
			echo $image;
		endif;

		?>
		<div class="<?php imns( 'm-card__content' ); ?>">
			<?php if ( ! empty( $pretitle ) ) : ?>
				<div class="<?php imns( 'm-card__meta' ); ?>">
					<div class="<?php imns( 'a-meta' ); ?>"><?php echo apply_filters( 'the_title', $pretitle ); ?></div>
				</div>
			<?php endif; ?>
			<?php echo ( $has_link ) ? '<a href="' . esc_url( $attributes['url'] ) . '" class="' . imns( 'm-card__link', false ) . '"' . iis_rel_noopener( $attributes['target'], false ) . ' target="' . esc_attr( $attributes['target'] ) . '">' : ''; ?>
			<h1 class="<?php echo $title_class; ?>">
				<?php echo apply_filters( 'the_title', $attributes['title'] ); ?>
			</h1>
			<?php echo ( $has_link ) ? '</a>' : ''; ?>
			<?php echo $content; ?>
		</div>
	</article>
	<?php

	return ob_get_clean();
}

register_block_type(
	'iis/card',
	[
		'render_callback' => 'iis_render_card',
	]
);
