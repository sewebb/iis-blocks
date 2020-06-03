<?php

function iis_render_block_hero( $attributes, $content ) {
	$attributes = array_merge(
		[
			'mediaUrl'  => null,
			'mediaId'   => null,
			'title'     => '',
			'introText' => '',
			'align'     => 'full',
		],
		$attributes
	);

	$class = 'o-hero';

	if ( $attributes['align'] == 'full' ) {
		$class .= ' !alignfull';
	}

	ob_start();
	?>
	<figure class="wp-block-iis-hero <?php imns( $class ); ?>">
		<?php echo wp_get_attachment_image( $attributes['mediaId'], 'hero', false, [ 'class' => imns( 'o-hero__image', false ) ] ); ?>
		<figcaption class="<?php imns( 'o-hero__caption' ); ?>">
			<div class="wrapper">
				<div class="<?php imns( 'o-hero__text' ); ?>">
					<h1 class="supersize"><?php echo apply_filters( 'the_title', $attributes['title'] ); ?></h1>
					<p class="<?php imns( 'o-hero__paragraph' ); ?>"><?php echo esc_html( $attributes['introText'] ); ?></p>

					<?php if ( $content ) : ?>
					<div class="<?php imns( 'o-hero__buttons' ); ?>">
						<?php echo $content; ?>
					</div>
					<?php endif; ?>
				</div>
			</div>
		</figcaption>
	</figure>
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
