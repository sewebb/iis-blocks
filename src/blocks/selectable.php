<?php

function iis_render_selectable( $attributes, $content ) {
	$attributes = array_merge(
		[
			'className'       => '',
			'id'              => '',
			'title'           => '',
			'full'            => false,
			'background'      => false,
			'shadow'          => 'small',
			'rounded'         => false,
			'buttonColor'     => 'ocean',
			'copyButtonColor' => 'ocean-light',
		],
		$attributes
	);

	$blockId = sanitize_title( ( ! empty( $attributes['id'] ) ) ? $attributes['id'] : uniqid('selectable-') );
	$class   = $attributes['className'];
	$dom     = new DOMDocument();
	$html    = '<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body>' . $content . '</body></html>';

	$dom->loadHTML($html, LIBXML_NOERROR);

	$xpath       = new DOMXPath( $dom );
	$items       = $xpath->query( '//div[@data-selectable-item]' );
	$options     = [];
	$parsedItems = [];

	foreach ( $items as $item ) {
		$id           = $item->getAttribute( 'id' );
		$title        = $item->getAttribute( 'data-selectable-item' );
		$options[$id] = $title;

		$item->setAttribute( 'id', $blockId . '-' . $id );

		$parsedItems[$id] = $item->ownerDocument->saveHTML( $item );
	}

	$content_class = 'o-selectable';

	if ( $attributes['rounded'] && $attributes['background'] ) {
		$content_class .= ' o-selectable--border-radius';
	}

	if ( $attributes['shadow'] !== 'none' && $attributes['background'] ) {
		$content_class .= ' o-selectable--shadow-' . $attributes['shadow'];
	}

	if ( $attributes['background'] ) {
		$content_class .= ' !background-snow o-selectable--padded';
	}

	$wrapper_class = $attributes['full'] ? 'alignfull' : 'alignwide';

	ob_start();
	?>
	<div class="<?php echo iis_sanitize_html_classes( $wrapper_class ); ?>">
		<div class="wp-block-iis-selectable <?php echo iis_sanitize_html_classes( $class ); ?> <?php imns( $content_class ); ?>" data-selectable id="<?php echo esc_attr( $blockId ); ?>">
			<div class="form-control">
				<fieldset>
					<div class="row align-items-end">
						<div class="grid u-m-b-1">
							<legend><?php echo esc_html( $attributes['title'] ); ?></legend>
							<label for="<?php echo esc_attr( $blockId ); ?>-select" class="u-visuallyhidden"><?php echo esc_html( $attributes['title'] ); ?></label>
							<select data-selectable-select name="<?php echo esc_attr( $blockId ); ?>-select" id="<?php echo esc_attr( $blockId ); ?>-select" class="<?php imns( 'a-select a-select--full-width' ); ?>">
								<option value="" disabled>Alla</option>
								<?php foreach ( $options as $id => $title ) : ?>
									<option value="<?php echo $id; ?>"><?php echo $title; ?></option>
								<?php endforeach; ?>
							</select>
						</div>
						<div class="grid-md-auto u-m-b-1">
							<button class="<?php imns( 'a-button a-button--icon a-button--' . $attributes['buttonColor']); ?> u-m-r-1" data-selectable-all>
								<span class="<?php imns( 'a-button__text' ); ?>" data-label-pressed="Visa en i taget" data-label-unpressed="Visa alla">
									Visa alla
								</span>
								<svg class="<?php imns( 'icon a-button__icon' ); ?>">
									<use xlink:href="#icon-hamburger"></use>
								</svg>
							</button>
							<button class="<?php imns( 'a-button a-button--' . $attributes['copyButtonColor'] . ' a-button--icon' ); ?>" data-selectable-copy>
								<span class="<?php imns( 'a-button__text' ); ?>" data-copied="Kopierad!">
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
			<div data-selectable-items>
				<?php echo implode( "\n", $parsedItems ); ?>
			</div>
		</div>
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
