<?php

function iis_render_block_height_limiter( $attributes, $content ) {
	$attributes = array_merge(
		[
			'className'       => '',
			'height'          => '300',
			'maximize_text'   => 'Visa mer',
			'minimize_text'   => 'Visa mindre',
			'backgroundColor' => null,
		],
		$attributes
	);

	$class      = 'a-height-limit';
	$class_name = 'wp-block-iis-height-limiter js-height-limit';

	if ( $attributes['backgroundColor'] ) {
		$class .= ' a-height-limit--' . $attributes['backgroundColor'];
	}

	ob_start();

	?>

	<div class="<?php imns( $class ); ?> <?php echo $class_name; ?> <?php echo iis_sanitize_html_classes( $attributes['className'] ); ?>" data-height="<?php echo $attributes['height']; ?>" data-toggle-text="<?php echo $attributes['minimize_text']; ?>">
		<div class="<?php imns( 'a-height-limit__inner' ); ?>">
			<?php echo $content; ?>
		</div>
		<div class="row justify-content-center">
			<button type="button" class="<?php imns( 'a-height-limit__btn' ); ?> is-hidden js-toggle-height">
				<span class="<?php imns( 'a-height-limit__btn__text' ); ?>"><?php echo $attributes['maximize_text']; ?></span>
				<svg class="<?php imns( 'icon' ); ?>">
					<use xlink:href="#icon-arrow-down"></use>
				</svg>
			</button>
		</div>
	</div>
	<?php

	$content = ob_get_clean();

	return str_replace( [ "\t", "\n", "\r" ], '', $content );
}

register_block_type(
	'iis/height-limiter',
	[
		'render_callback' => 'iis_render_block_height_limiter',
	]
);
