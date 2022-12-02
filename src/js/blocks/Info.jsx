const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	InspectorControls,
	InnerBlocks,
} = wp.editor;
const { PanelBody, ToggleControl } = wp.components;

registerBlockType('iis/info', {
	title: __('Info box'),
	category: 'iis',
	icon: 'megaphone',
	keywords: [__('info'), __('facts'), __('message')],
	attributes: {
		big: {
			type: 'boolean',
			default: false,
		},
		customBorder: {
			type: 'boolean',
			default: false,
		},
	},
	edit({ attributes, setAttributes }) {
		const allowed = ['core/paragraph'];
		let template = [];
		let templateLock = null;
		let className = 'iis-info-block';

		if (attributes.big) {
			template = [['core/paragraph']];
			templateLock = 'all';

			className += ` ${className}--big`;
		} else if(attributes.customBorder) {
			template = [['core/paragraph']];
			templateLock = 'all';

			className += ` ${className}--custom-border`;
		} else {
			allowed.push('core/heading');
			allowed.push('core/list');
		}

		return (
			<div>
				<InspectorControls>
					<PanelBody>
						<ToggleControl
							label="Big"
							checked={attributes.big}
							onChange={(big) => setAttributes({ big })}
						/>
					</PanelBody>
					<PanelBody>
						<ToggleControl
							label="Custom border"
							checked={attributes.customBorder}
							onChange={(customBorder) => setAttributes({ customBorder })}
						/>
					</PanelBody>
				</InspectorControls>
				<div className={className}>
					<InnerBlocks allowedBlocks={allowed} template={template} templateLock={templateLock} />
				</div>
			</div>
		);
	},
	save({ attributes }) {
		return (
			<div className={`iis-m-info-box ${(attributes.big) ? 'iis-m-info-box--big' : ''} ${(attributes.customBorder) ? 'iis-m-info-box--custom-border' : ''}`}>
				<InnerBlocks.Content />
			</div>
		);
	},
});
