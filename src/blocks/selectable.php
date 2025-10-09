<?php

function iis_render_selectable( $attributes, $content ) {
	$attributes = array_merge(
		[
			'className'   => '',
			'id'          => '',
			'title'       => '',
			'wrapped'     => false,
			'transparent' => false,
			'shadow'      => 'small',
			'rounded'     => false,
		],
		$attributes
	);

	$blockId = ( ! empty( $attributes['id'] ) ) ? $attributes['id'] : uniqid('selectable-');
	$class   = $attributes['className'];
	$dom     = new DOMDocument();
	$html    = '<?xml encoding="UTF-8">' . $content;

	$dom->loadHTML($html, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);

	$xpath   = new DOMXPath( $dom );
	$items   = $xpath->query( '//div[@data-selectable-item]' );
	$options = [];

	foreach ( $items as $item ) {
		$id           = $item->getAttribute( 'id' );
		$title        = $item->getElementsByTagName( 'h2' )->item( 0 )->textContent;
		$options[$id] = $title;
	}

	$content_class = 'o-selectable';

	if ( $attributes['rounded'] ) {
		$content_class .= ' o-selectable--border-radius';
	}

	if ( $attributes['shadow'] !== 'none' ) {
		$content_class .= ' o-selectable--' . $attributes['shadow'];
	}

	ob_start();
	?>
	<div class="wp-block-iis-selectable <?php echo iis_sanitize_html_classes( $class ); ?> <?php echo $content_class; ?>">
		<div class="form-control">
			<fieldset>
				<div class="row align-items-end">
					<div class="grid u-m-b-1">
						<legend><?php echo esc_html( $attributes['title'] ); ?></legend>
						<label for="<?php echo esc_attr( $blockId ); ?>" class="u-visuallyhidden"><?php echo esc_html( $attributes['title'] ); ?></label>
						<select name="<?php echo esc_attr( $blockId ); ?>" id="<?php echo esc_attr( $blockId ); ?>" class="<?php imns( 'a-select a-select--full-width' ); ?>">
							<?php foreach ( $options as $id => $title ) : ?>
								<option value="<?php echo $id; ?>"><?php echo $title; ?></option>
							<?php endforeach; ?>
						</select>
					</div>
					<div class="grid-md-auto u-m-b-1">
						<button class="<?php imns( 'a-button a-button--icon' ); ?> u-m-r-1">
							<span class="<?php imns( 'a-button__text' ); ?>">
								Visa alla
							</span>
							<svg class="<?php imns( 'icon a-button__icon' ); ?>">
								<use xlink:href="#icon-hamburger"></use>
							</svg>
						</button>
						<button class="<?php imns( 'a-button a-button--ocean-light a-button--icon' ); ?>">
                        <span class="<?php imns( 'a-button__text' ); ?>">
                            Kopiera länk
                        </span>
							<svg class="<?php imns( 'icon a-button__icon' ); ?>">
								<use xlink:href="#icon-link"></use>
							</svg>
						</button>
					</div>
				</div>
			</fieldset>
		</div>
		<?php echo $content; ?>
	</div>
	<?php

	return ob_get_clean();
}

register_block_type(
	'iis/selectable',
	[
		'render_callback' => 'iis_render_selectable',
	]
);
