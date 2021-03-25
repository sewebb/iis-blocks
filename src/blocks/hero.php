<?php

function iis_render_block_hero( $attributes, $content ) {
	$attributes = array_merge(
		[
			'mediaUrl'  => null,
			'mediaId'   => null,
			'mediaType' => null,
			'title'     => '',
			'introText' => '',
			'align'     => 'wide',
			'youtube'   => null,
		],
		$attributes
	);

	$class = 'o-hero';
	$img   = null;

	if ( $attributes['mediaId'] && 'video' === $attributes['mediaType'] ) {
		$class .= ' o-hero--border-radius o-hero--video';

		if ( 'full' == $attributes['align'] ) {
			$class .= ' !alignfull';
		}

		ob_start();
		?>
		<div class="wp-block-iis-hero">
			<figure class="<?php imns( $class ); ?>">
				<video width="100%" height="100%" src="<?php echo wp_get_attachment_url( $attributes['mediaId'] ); ?>" controls></video>
			</figure>
		</div>
		<?php

		$content = ob_get_clean();

		return str_replace( [ "\t", "\n", "\r" ], '', $content );
	}

	$youtube_url = null;

	if ( ! is_null( $attributes['youtube'] ) && !empty ( trim( $attributes['youtube'] ) ) ) {
		preg_match('#(?<=v=)[a-zA-Z0-9-]+(?=&)|(?<=v\/)[^&\n]+(?=\?)|(?<=v=)[^&\n]+|(?<=youtu.be/)[^&\n]+#', $attributes['youtube'], $matches);

		if ( $matches && isset( $matches[0] ) ) {
			$youtube_url = 'https://www.youtube-nocookie.com/embed/' . $matches[0] . '?rel=0';
		}
	}

	if ( $youtube_url ) {
		$class .= ' o-hero--border-radius o-hero--video';

		if ( 'full' == $attributes['align'] ) {
			$class .= ' !alignfull';
		}

		ob_start();
		?>
		<div class="wp-block-iis-hero">
			<figure class="<?php imns( $class ); ?>">
				<iframe width="100%" height="100%" src="<?php echo $youtube_url; ?>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</figure>
		</div>
		<?php

		$content = ob_get_clean();

		return str_replace( [ "\t", "\n", "\r" ], '', $content );
	}

	if ( $attributes['mediaId'] ) {
		$img = wp_get_attachment_image( $attributes['mediaId'], 'hero', false, [ 'class' => imns( 'o-hero__image', false ) ] );
	}

	if ( ! $img ) {
		$class .= ' o-hero--no-image';
	}

	if ( 'full' == $attributes['align'] ) {
		$class .= ' !alignfull';
	} elseif ( $img ) {
		$class .= ' o-hero--border-radius !u-m-t-4';
	}

	ob_start();
	?>
	<div class="wp-block-iis-hero <?php imns( $class ); ?>">
		<?php echo $img; ?>
		<div class="<?php imns( 'o-hero__caption' ); ?>">
			<div class="wrapper">
				<div class="<?php imns( 'o-hero__text' ); ?>">
					<h1 class="supersize"><?php echo apply_filters( 'the_title', $attributes['title'] ); ?></h1>
					<?php if ( $attributes['introText'] && ! empty( trim( $attributes['introText'] ) ) ) : ?>
					<p class="<?php imns( 'o-hero__paragraph' ); ?>"><?php echo esc_html( $attributes['introText'] ); ?></p>
					<?php endif; ?>

					<?php if ( $content ) : ?>
					<div class="<?php imns( 'o-hero__buttons' ); ?>">
						<?php echo $content; ?>
					</div>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</div>
	<?php

	$content = ob_get_clean();

	return str_replace( [ "\t", "\n", "\r" ], '', $content );
}

register_block_type(
	'iis/hero',
	[
		'render_callback' => 'iis_render_block_hero',
	]
);
