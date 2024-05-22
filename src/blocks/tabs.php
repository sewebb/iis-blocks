<?php

function iis_render_tabs( $attributes, $content ) {
	$attributes = array_merge(
		[
			'className'  => '',
			'align'      => '',
			'center'      => true,
			'updateURL'  => false,
		],
		$attributes
	);

	$class = $attributes['className'];

	if ( $attributes['updateURL'] ) {
		$updateURL = 'data-update-url="true"';
	}

	if ( 'full' == $attributes['align'] ) {
		$class .= ' alignfull';
	}

	ob_start();
	?>
	<div data-tab-component <?php echo $updateURL; ?> class="<?php echo iis_sanitize_html_classes( $class ); ?> <?php if ( 'none' == $attributes['align'] ) : ?>u-m-x-0<?php endif; ?>">
		<?php if ( true == $attributes['center'] ) : ?>
			<div class="wrapper">Centrera tabbarna</div>
		<?php endif; ?>
		<?php echo $content; ?>
	</div>
	<?php

	return ob_get_clean();
}

register_block_type(
	'iis/tabs',
	[
		'render_callback' => 'iis_render_tabs',
	]
);
