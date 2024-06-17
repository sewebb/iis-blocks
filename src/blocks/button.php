<?php

function iis_render_block_button( $attributes ) {
	$attributes = array_merge(
		[
			'size'        => 'regular',
			'text'        => '',
			'link'        => null,
			'data'        => null,
			'target'      => '_self',
			'buttonColor' => null,
			'className'   => '',
		],
		$attributes
	);

	$class_name = 'a-button';

	if ( $attributes['buttonColor'] && 'ocean-dark' != $attributes['buttonColor'] ) {
		$class_name .= ' a-button--' . $attributes['buttonColor'];
	}

	if ( $attributes['size'] && 'regular' != $attributes['size'] ) {
		$class_name .= ' a-button--' . $attributes['size'];
	}

	ob_start();
	?>
	<div>
	<?php if ( ! empty( $attributes['link'] ) ) : ?>
		<a href="<?php echo esc_url( $attributes['link'] ); ?>"<?php iis_rel_noopener( $attributes['target'] ); ?> target="<?php echo esc_html( $attributes['target'] ); ?>" <?php echo $attributes['data']; ?> class="<?php imns( $class_name ); ?> <?php echo iis_sanitize_html_classes( $attributes['className'] ); ?>">
	<?php else : ?>
		<button <?php echo $attributes['data']; ?> class="<?php imns( $class_name ); ?> <?php echo iis_sanitize_html_classes( $attributes['className'] ); ?>">
	<?php endif; ?>
			<span class="<?php imns( 'a-button__text' ); ?>"><?php echo esc_html( $attributes['text'] ); ?></span>
	<?php if ( ! empty( $attributes['link'] ) ) : ?>
		</a>
	<?php else : ?>
		</button>
	<?php endif; ?>
	</div>
	<?php

	$content = ob_get_clean();

	return str_replace( [ "\t", "\n", "\r" ], '', $content );
}

register_block_type(
	'iis/button',
	[
		'render_callback' => 'iis_render_block_button',
	]
);
