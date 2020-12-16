<?php

function iis_render_block_section( $attributes, $content ) {
	$attributes = array_merge(
		[
			'white' => false,
			'highlightColor' => 'ruby',
			'decoration' => null,
			'style' => 'landing-page',
			'backgroundColor' => null,
		],
		$attributes
	);

	$class_name    = 'o-section';
	$content_class = '!wrapper o-section__content';

	if ( $attributes['style'] === 'landing-page' ) {
		if ( $attributes['white'] ) {
			$class_name .= ' o-section--white';
		}

		if ( $attributes['decoration'] ) {
			$content_class .= ' o-section__content--' . $attributes['decoration'];
		}

		if ( $attributes['decoration'] ) {
			$content_class .= ' o-section__content--' . str_replace( '-light', '', $attributes['highlightColor'] );
		}
	} elseif ( $attributes['backgroundColor'] ) {
		$class_name .= ' !background-' . $attributes['backgroundColor'];
	}

	ob_start();
	?>
	<div class="<?php imns( $class_name ); ?> alignfull">
		<div class="<?php imns( $content_class ); ?>">
			<div class="grid-18">
				<div class="<?php imns( 'article' ); ?>">
					<div class="<?php imns( 'article__content' ); ?>">
						<?php echo $content; ?>
					</div>
				</div>
			</div>
		</div>
	</div>
	<?php

	return ob_get_clean();
}

register_block_type(
	'iis/section',
	[
		'render_callback' => 'iis_render_block_section',
	]
);
