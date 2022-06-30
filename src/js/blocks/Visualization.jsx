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
} = wp.components;

registerBlockType('iis/visualization', {
	title: __('Visualization'),
	category: 'iis',
	icon: 'welcome-view-site',
	keywords: [__('visualization')],
	attributes: {
		backgroundColor: {
			type: 'string',
			default: 'snow',
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

		return (
			<div>
				<InspectorControls>
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
