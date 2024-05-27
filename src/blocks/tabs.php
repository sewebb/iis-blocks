<?php

function iis_render_tabs( $attributes, $content ) {
	$attributes = array_merge(
		[
			'className'  => '',
			'align'      => '',
			'wrapped'    => true,
			'updateURL'  => false,
		],
		$attributes
	);

	$class     = $attributes['className'];
	$updateURL = '';

	if ( $attributes['updateURL'] ) {
		$updateURL = 'data-update-url="true"';
	}

	if ( 'full' == $attributes['align'] ) {
		$class .= ' alignfull';
	}

	$dom = new DOMDocument();

	$dom->loadHTML( $content, LIBXML_NOERROR );

	$xpath = new DOMXPath( $dom );
	$tabs = $xpath->query( '//ul[@data-tabs]' );
	$lis = '';

	foreach ( $tabs as $tab ) {
		$liElements = $tab->getElementsByTagName( 'li' );

		foreach ( $liElements as $li ) {
			$lis .= $dom->saveHTML( $li );
		}
	}

	$tabs = $xpath->query( '//ul[@data-tabs]' );
	$tabsUlClass = $tabs->item(0)->getAttribute( 'class' );

	foreach ( $tabs as $tab ) {
		$tab->parentNode->removeChild( $tab );
	}

	$content = $dom->saveHTML();

	// Add <ul> elements with data-tabs attribute to the beginning of the content
	$content = '<ul data-tabs class="' . $tabsUlClass .'">' . $lis . '</ul>' . $content;

	// Remove empty lines
	$content = preg_replace( '/^\s*[\r\n]/m', '', $content );

	ob_start();
	?>
	<div data-tab-component <?php echo $updateURL; ?> class="<?php echo iis_sanitize_html_classes( $class ); ?> <?php if ( 'none' == $attributes['align'] ) : ?>u-m-x-0<?php endif; ?>">
		<?php if ( true == $attributes['wrapped'] ) : ?>
			<div class="wrapper">Wrappa tabbarna</div>
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
