<?php

function iis_render_block_section( $attributes, $content ) {
	$attributes = array_merge(
		[
			'white' => false,
			'highlightColor' => 'ruby',
		],
		$attributes
	);

	$class_name = 'o-section o-section--' . str_replace( '-light', '', $attributes['highlightColor'] );

	if ($attributes['white']) {
		$class_name .= ' o-section--white';
	}

	ob_start();
	?>
	<div class="wp-block-iis-section alignfull">
		<div class="<?php imns( $class_name ); ?>">
			<div class="<?php imns( '!wrapper o-section__content' ); ?>">
				<div class="grid-18">
					<div class="<?php imns( 'article' ); ?>">
						<div class="<?php imns( 'article__content' ); ?>">
							<?php echo $content; ?>
						</div>
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
