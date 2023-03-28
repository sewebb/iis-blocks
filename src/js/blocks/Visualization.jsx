const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { useSelect } = wp.data;
const {
	InspectorControls,
	withColors,
	PanelColorSettings,
	InnerBlocks,
} = wp.blockEditor;
const {
	PanelBody,
	CheckboxControl,
} = wp.components;

registerBlockType('iis/visualization', {
	title: __('Visualization'),
	category: 'iis',
	icon: 'welcome-view-site',
	keywords: [__('visualization')],
	supports: {
		align: ['right'],
	},
	attributes: {
		backgroundColor: {
			type: 'string',
			default: false,
		},
		padding: {
			type: 'string',
			default: false,
		},
	},
	edit: withColors({ backgroundColor: 'background' })(({
		attributes,
		setAttributes,
		backgroundColor,
		setBackgroundColor

	}) => {

		const blockStyle = {
			display: 'block',
			position: 'relative',
			margin: '0',
			padding: '2rem',
			overflow: 'hidden',
			border: '0',
			borderRadius: '.25rem',
			backgroundColor: (backgroundColor.color) ? backgroundColor.color : '#ffffff',
			color: '#1f2a36',
			fontFamily: 'sans-serif',
			textDecoration: 'none',
			textShadow: 'none',
		};

		if (attributes.padding === '--no-padding') {
			blockStyle.padding = '0';
		}

		return (
			<div>
				<InspectorControls>
					<PanelBody>
						<CheckboxControl
							label={__('No padding')}
							checked={attributes.padding === '--no-padding'}
							onChange={(value) => setAttributes({ padding: (value) ? '--no-padding' : '' })}
						/>
					</PanelBody>
					<PanelColorSettings
						title={__('Color Settings')}
						colorSettings={[
							{
								value: backgroundColor.color,
								onChange: setBackgroundColor,
								label: __('Background Color'),
							},
						]}
					/>
				</InspectorControls>
				<div>
					<div style={blockStyle}>
					<InnerBlocks />
					</div>
				</div>
			</div>
		);
	}),
	save() {
		return <InnerBlocks.Content />;
	},
});
