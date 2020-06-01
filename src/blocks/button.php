<?php

function iis_render_block_button( $attributes ) {
	$attributes = array_merge(
		[
			'size'        => 'regular',
			'text'        => '',
			'link'        => '/',
			'buttonColor' => null,
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
		<a href="<?php echo esc_url( $attributes['link'] ); ?>" class="<?php imns( $class_name ); ?>">
			<span class="<?php imns( 'a-button__text' ); ?>"><?php echo esc_html( $attributes['text'] ); ?></span>
		</a>
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
