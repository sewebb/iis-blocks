<?php

function iis_render_block_button( $attributes ) {
	$attributes = array_merge([
		'size' => 'regular',
		'text' => '',
		'url' => '/',
		'buttonColor' => null,
	], $attributes);

	$className = 'a-button';

	if ($attributes['buttonColor'] && $attributes['buttonColor'] != 'ocean-dark') {
		$className .= ' a-button--' . $attributes['buttonColor'];
	}

	if ($attributes['size'] && $attributes['size'] != 'regular') {
		$className .= ' a-button--' . $attributes['size'];
	}

	ob_start();
	?>
	<div>
		<a href="<?php echo esc_url( $attributes['url'] ); ?>" class="<?php imns( $className ); ?>">
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
