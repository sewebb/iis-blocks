<?php

register_block_type(
	'internetkunskap/have-i-been-pwned-mini-form',
	[
		'render_callback' => 'internetkunskap_render_have_i_been_pwned_mini_form',
	]
);

function internetkunskap_render_have_i_been_pwned_mini_form( $attributes, $content ) {
	$attributes = array_merge(
		[
			'align'        => null,
			'background'   => true,
			'showOnMobile' => false,
			'imageId'      => null,
			'imageSize'    => null,
			'figcaption'   => null,
			'pretitle'     => '',
			'title'        => '',
			'shadow'       => false,
			'targetUrl'    => '',
			'openInNewTab' => false,
			'className'    => '',
		],
		$attributes
	);

	$target_url = ! empty( $attributes['targetUrl'] ) ? esc_url_raw( trim( $attributes['targetUrl'] ) ) : '';

	if ( ! $target_url ) {
		return '';
	}

	$input_id   = wp_unique_id( 'haveibeenpwned-mini-account-' );
	$pretitle   = trim( $attributes['pretitle'] );
	$title      = trim( $attributes['title'] );
	$figcaption = $attributes['figcaption'] ? trim( $attributes['figcaption'] ) : '';

	$class  = 'wp-block-have-i-been-pwned-mini-form wp-block-iis-card ' . $attributes['className'];
	$class .= in_array( $attributes['align'], [ 'right', 'wide' ], true ) ? ' align' . $attributes['align'] : '';

	if ( 'right' === $attributes['align'] && ! $attributes['showOnMobile'] ) {
		$class .= ' u-hide-md';
	}

	$card_class = 'm-card';

	if ( $attributes['background'] ) {
		$card_class .= ' m-card--padded';
	}

	if ( 'wide' === $attributes['align'] ) {
		$card_class .= ' m-card--wide';
	}

	if ( $attributes['shadow'] ) {
		$card_class .= ' m-card--shadow';
	}

	$image = null;
	if ( $attributes['imageId'] ) {
		$image_size  = 'puff-image';
		$image_sizes = apply_filters( 'iis_blocks_puff_image_sizes', [ 'puff-image-large', 'puff-image', 'puff-teaser-image', 'puff-image-4:3' ] );

		if ( null !== $attributes['imageSize'] && in_array( $attributes['imageSize'], $image_sizes, true ) ) {
			$image_size = $attributes['imageSize'];
		}

		$image_class = imns( 'm-card__image m-card__media', false );
		$image       = wp_get_attachment_image(
			$attributes['imageId'],
			$image_size,
			false,
			[ 'class' => $image_class ]
		);
	}

	$title_class = 'beta';

	ob_start();

	?>
	<?php if ( $figcaption ) : ?>
		<figure class="<?php imns( $card_class ); ?> <?php echo esc_attr( iis_sanitize_html_classes( $class ) ); ?>">
	<?php else : ?>
		<article class="<?php imns( $card_class ); ?> <?php echo esc_attr( iis_sanitize_html_classes( $class ) ); ?>">
	<?php endif; ?>

		<?php echo wp_kses_post( $image ); ?>

		<?php if ( $figcaption ) : ?>
			<figcaption class="<?php imns( 'm-card__content' ); ?>
				<?php if ( empty( $title ) ) : ?>
					u-m-t-1
				<?php endif; ?>
			">
				<?php echo wp_kses_post( apply_filters( 'figcaption', $figcaption ) ); ?>
			</figcaption>
			<div class="<?php imns( 'm-card__content' ); ?>">
		<?php else : ?>
			<div class="<?php imns( 'm-card__content' ); ?>">
				<?php if ( ! empty( $pretitle ) ) : ?>
					<div class="<?php imns( 'm-card__meta' ); ?>">
						<div class="<?php imns( 'a-meta' ); ?>">
							<?php echo wp_kses_post( apply_filters( 'the_title', $pretitle ) ); ?>
						</div>
					</div>
				<?php endif; ?>

				<?php if ( ! empty( $title ) ) : ?>
					<h1 class="<?php echo esc_attr( $title_class ); ?>">
						<?php echo wp_kses_post( apply_filters( 'the_title', $title ) ); ?>
					</h1>
				<?php endif; ?>

				<?php
				// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				echo $content;
				?>
		<?php endif; ?>

				<form method="get" action="<?php echo esc_url( $target_url ); ?>" data-haveibeenpwnd-redirect novalidate
					<?php if ( $attributes['openInNewTab'] ) : ?>
						target="_blank" rel="noopener noreferrer"
					<?php endif; ?>
				>
					<input type="hidden" name="hibp-search" value="1">
					<label for="<?php echo esc_attr( $input_id ); ?>" class="u-visuallyhidden">Ange din e-postadress</label>
					<div class="internetkunskap-m-input-group">
						<span class="internetkunskap-m-input-group__label" aria-hidden="true">
							<svg class="icon u-icon--medium">
								<use xlink:href="#icon-search"></use>
							</svg>
						</span>
						<input name="account" type="email" required placeholder="Ange din e-postadress" id="<?php echo esc_attr( $input_id ); ?>" class="internetkunskap-a-input">
						<button type="submit" class="internetkunskap-a-button internetkunskap-a-button--input-group internetkunskap-a-button--ocean-light">
							<span class="internetkunskap-a-button__text">Sök</span>
						</button>
					</div>
				</form>
			</div>

	<?php if ( $figcaption ) : ?>
		</figure>
	<?php else : ?>
		</article>
	<?php endif; ?>
	<?php

	return ob_get_clean();
}
