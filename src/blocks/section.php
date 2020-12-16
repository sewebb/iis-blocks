<?php

function iis_render_block_section( $attributes, $content ) {
	$attributes = array_merge(
		[
			'white' => false,
			'highlightColor' => 'ruby',
		],
		$attributes
	);

	$class_name = 'o-section';

	if ($attributes['white']) {
		$class_name .= ' o-section--white';
	}

	ob_start();
	?>
	<div class="<?php imns( $class_name ); ?> alignfull">
		<div class="<?php imns( '!wrapper o-section__content o-section__content--' . str_replace( '-light', '', $attributes['highlightColor'] ) ); ?>">
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
