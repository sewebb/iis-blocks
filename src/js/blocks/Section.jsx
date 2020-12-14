import './section.css';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	InspectorControls,
	InnerBlocks,
	withColors,
	PanelColorSettings,
} = wp.editor;
const { PanelBody, ToggleControl } = wp.components;

registerBlockType('iis/section', {
	title: __('Section'),
	category: 'iis',
	icon: 'align-center',
	keywords: [__('section')],
	attributes: {
		white: {
			type: 'boolean',
			default: false,
		},
		align: {
			type: 'string',
			default: 'full',
		},
		highlightColor: {
			type: 'string',
			default: 'ruby-light',
		},
	},
	supports: {
		align: ['full'],
	},
	edit: withColors({ highlightColor: 'color' })(({
		attributes, setAttributes, highlightColor, setHighlightColor,
	}) => {
		const style = {
			backgroundColor: (attributes.white) ? '#fff' : '#ededed',
			border: (attributes.white) ? '1px dashed #ededed' : null,
			padding: '20px 0',
		};

		const className = `iis-block-section iis-block-section--${highlightColor.slug}`;

		return (
			<div className={className}>
				<InspectorControls>
					<PanelBody title="Design">
						<ToggleControl
							label="White"
							checked={attributes.white}
							onChange={(white) => setAttributes({ white })}
						/>
					</PanelBody>
					<PanelColorSettings
						title={__('Color settings')}
						colorSettings={[
							{
								colors: [
									{
										name: __('Ruby'),
										slug: 'ruby-light',
										color: '#ff9fb4',
									},
									{
										name: __('Peacock'),
										slug: 'peacock-light',
										color: '#e0bff5',
									},
									{
										name: __('Jade'),
										slug: 'jade-light',
										color: '#aae3d9',
									},
								],
								value: highlightColor.color,
								onChange: setHighlightColor,
								label: __('Highlight Color'),
							},
						]}
					/>
				</InspectorControls>
				<div style={style}>
					<InnerBlocks />
				</div>
			</div>
		);
	}),
	save() {
		return <InnerBlocks.Content />;
	},
});
