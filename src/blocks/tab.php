<?php

function iis_render_tab( $attributes, $content ) {
	$attributes = array_merge(
		[
			'tab_title'    => '',
		],
		$attributes
	);

	ob_start();

	?>
	<?php if ( true == $attributes['wrap'] ) : ?>
		<div class="wrapper">
	<?php endif; ?>
	<ul class="<?php imns('o-tab-list' ); ?> js-o-tab-list">
		<li class="<?php imns('o-tab-list__item' ); ?>">
			<a class="<?php imns('o-tab-list__link' ); ?>" href="#<?php echo esc_html( $attributes['tab_title'] ); ?>" id="tab-<?php echo esc_html( $attributes['tab_title'] ); ?>"><?php echo esc_html( $attributes['tab_title'] ); ?></a>
		</li>
	</ul>
	<?php if ( true == $attributes['wrap'] ) : ?>
		</div>
	<?php endif; ?>
	<section id="<?php echo esc_html( $attributes['tab_title'] ); ?>" class="<?php imns('o-tab-panel' ); ?>">
		<?php echo $content; ?>
	</section>

	<?php

	return ob_get_clean();
}

register_block_type(
	'iis/tab',
	[
		'render_callback' => 'iis_render_tab',
	]
);
