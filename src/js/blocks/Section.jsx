const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	InspectorControls,
	InnerBlocks,
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
	},
	supports: {
		align: ['full'],
	},
	edit({ attributes, setAttributes }) {
		const style = {
			backgroundColor: (attributes.white) ? '#fff' : '#ededed',
			border: (attributes.white) ? '1px dashed #ededed' : null,
			padding: '20px 0',
		};

		return (
			<div>
				<InspectorControls>
					<PanelBody title="Design">
						<ToggleControl
							label="White"
							checked={attributes.white}
							onChange={(white) => setAttributes({ white })}
						/>
					</PanelBody>
				</InspectorControls>
				<div style={style}>
					<InnerBlocks />
				</div>
			</div>
		);
	},
	save() {
		return <InnerBlocks.Content />;
	},
});
