const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	RichText,
} = wp.editor;
const { TextControl } = wp.components;
const {
	InspectorControls,
	PanelColorSettings,
	InnerBlocks,
	withColors,
} = wp.blockEditor;

registerBlockType('iis/height-limiter', {
	title: __('Height limiter'),
	category: 'iis',
	icon: 'image-flip-vertical',
	keywords: [__('height'), __('limit'), __('limiter')],
	attributes: {
		height: {
			type: 'number',
			default: 300,
		},
		maximize_text: {
			type: 'string',
			default: 'Visa mer',
		},
		minimize_text: {
			type: 'string',
			default: 'Visa mindre',
		},
		backgroundColor: {
			type: 'string',
			default: false,
		},

	},
	edit: withColors({ backgroundColor: 'background' })(({
			attributes,
			setAttributes,
			backgroundColor,
			setBackgroundColor,

		}) => {
		return (
			<div>
				<InspectorControls>
					<PanelColorSettings
						title={__('Color settings', 'iis/blocks')}
						colorSettings={[
							{
								colors: [
									{
										name: __('Snow'),
										slug: 'snow',
										color: '#ffffff',
									},
								],
								value: backgroundColor.color,
								onChange: setBackgroundColor,
								label: __('Background Color', 'iis/blocks'),
							},
						]}
					/>
				</InspectorControls>
				<div style={{ background: '#ededed', padding: '20px' }}>
					<TextControl type="number" label={__('Height')} value={attributes.height} onChange={(height) => setAttributes({ height: height })} />

					<TextControl type="text" label={__('Maximize text')} value={attributes.maximize_text} onChange={(maximize_text) => setAttributes({ maximize_text: maximize_text })}/>

					<TextControl type="text" label={__('Minimize text')} value={attributes.minimize_text} onChange={(minimize_text) => setAttributes({ minimize_text: minimize_text })}/>
				</div>
				<div style={{ border: '1px solid #d8d8d8', padding: '20px' }}>
					<InnerBlocks />
				</div>
			</div>
		);
	}),
	save() {
		return <InnerBlocks.Content />;
	},
});
