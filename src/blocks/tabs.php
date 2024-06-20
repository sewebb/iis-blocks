<?php

function iis_render_tabs( $attributes, $content ) {
	$attributes = array_merge(
		[
			'className' => '',
			'align'     => '',
			'wrapped'   => false,
			'updateURL' => false,
			'gray'      => false,
			'name'      => '',
		],
		$attributes
	);

	$class     = $attributes['className'];
	$updateURL = '';

	if ( $attributes['updateURL'] ) {
		$updateURL = 'data-update-url="true"';
	}

	if ( 'full' == $attributes['align'] ) {
		$class .= ' alignfull u-border-radius-none';
	}

	$tabListItems = [];

	preg_match_all( '/<li class="[^"]*o-tab-list__item[^"]*">.*?<\/li>/s', $content, $tabListItems );

	$url_prefix   = ( ! empty( $attributes['name'] ) ) ? sanitize_title( $attributes['name'] ) . '-' : '';
	$tabListItems = array_map(
		function ( $item ) use ( $url_prefix ) {
			$item = preg_replace( '/href="#([^"]+)"/', 'href="#' . $url_prefix . '$1"', $item );

			return preg_replace( '/id="tab-([^"]+)"/', 'id="' . $url_prefix . 'tab-$1"', $item );
		},
		$tabListItems[0],
	);
	$tabListItems = implode( '', $tabListItems );
	$content      = preg_replace( '/<ul data-tabs.*?<\/ul>/s', '', $content );
	$content      = preg_replace( '/^\s*[\r\n]/m', '', $content );

	if ( $attributes['gray'] ) {
		$tabListModifier  = imns( 'o-tab-list--gray', false );
		$tabPanelModifier = imns( 'o-tab-panel--gray', false );
		$content          = preg_replace( '/<section(.*?)class="([^"]+)".*?role=\"tabpanel\"/', '<section$1class="$2 ' . $tabPanelModifier . '" role="tabpanel"', $content );
		$content          = preg_replace( '/<section id="([^"]+)"/', '<section id="' . $url_prefix . '$1"', $content );
	}

	ob_start();
	?>
	<div data-tab-component class="<?php echo iis_sanitize_html_classes( $class ); ?> <?php if ( 'none' == $attributes['align'] ) :
?>
u-m-x-0<?php endif; ?>">
		<?php if ( true == $attributes['wrapped'] ) : ?>
		<div class="wrapper">
			<?php endif; ?>
			<ul class="<?php imns( 'o-tab-list' ); ?> js-o-tab-list <?php echo $tabListModifier; ?>" <?php echo $updateURL; ?>>
				<?php echo $tabListItems; ?>
			</ul>
			<?php if ( true == $attributes['wrapped'] ) : ?>
		</div>
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
