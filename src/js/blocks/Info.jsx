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
	},
	edit({ attributes, setAttributes }) {
		const allowed = ['core/paragraph'];
		let template = [];
		let templateLock = null;
		let className = 'iis-info-block';

		if (!attributes.big) {
			allowed.push('core/heading');
			allowed.push('core/list');
		} else {
			template = [['core/paragraph']];
			templateLock = 'all';

			className += ` ${className}--big`;
		}

		return (
			<div>
				<InspectorControls>
					<PanelBody>
						<ToggleControl
							label="Big"
							checked={ attributes.big }
							onChange={ big => setAttributes({ big }) }
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
			<div className={`iis-m-info-box ${(attributes.big) ? 'iis-m-info-box--big' : ''}`}>
				<InnerBlocks.Content />
			</div>
		);
	},
});
