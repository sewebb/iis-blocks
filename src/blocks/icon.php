<?php

function iis_render_icon( $attributes, $content ) {
	$attributes = array_merge(
		[
			'className' => '',
			'title'     => null,
			'text'      => null,
			'icon'      => null,
			'size'      => 'large',
			'iconColor' => 'cyberspace',
			'url'       => null,
			'newWindow' => true,
		],
		$attributes
	);

	$size  = ( $attributes['size'] ) ? 'u-icon--' . $attributes['size'] : '';
	$title = ( $attributes['title'] ) ? trim( $attributes['title'] ) : '';
	$text  = ( $attributes['text'] ) ? trim( $attributes['text'] ) : '';

	ob_start();
	?>
	<?php if ( ! empty( $title ) || ! empty( $text ) ) : ?>
	<div class="wp-block-iis-icon u-position-relative <?php echo iis_sanitize_html_classes( $attributes['className'] ); ?> display-flex align-items-center">
		<div class="u-m-r-3">
			<svg class="icon u-icon u-icon--color <?php echo $size; ?> color-<?php echo $attributes['iconColor']; ?>">
				<use xlink:href="#icon-<?php echo esc_attr( $attributes['icon'] ); ?>"></use>
			</svg>
		</div>
		<div>
			<?php if ( $attributes['title'] ) : ?>
				<?php if ( $attributes['url'] && ! empty( $attributes['url'] ) ) : ?>
					<a class="beta u-icon-list-link" href="<?php echo esc_url( $attributes['url'] ); ?>" <?php echo ( $attributes['newWindow'] ) ? 'target="_blank"' : '' ?>><?php echo esc_html( $attributes['title'] ); ?></a>
				<?php else : ?>
					<span class="beta"><?php echo esc_html( $attributes['title'] ); ?></span>
				<?php endif; ?>
			<?php endif; ?>
			<?php if ( $attributes['text'] ) : ?>
				<p class="u-m-b-0"><?php echo esc_html( $attributes['text'] ); ?></p>
			<?php endif; ?>
		</div>
	</div>
	<?php else : ?>
		<svg class="wp-block-iis-icon <?php echo iis_sanitize_html_classes( $attributes['className'] ); ?> icon u-icon <?php echo $size; ?>">
			<use xlink:href="#icon-<?php echo esc_attr( $attributes['icon'] ); ?>"></use>
		</svg>
	<?php endif; ?>
	<?php

	return ob_get_clean();
}

register_block_type(
	'iis/icon',
	[
		'render_callback' => 'iis_render_icon',
	]
);
