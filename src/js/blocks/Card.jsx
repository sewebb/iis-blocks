const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const {
	CheckboxControl,
	PanelBody,
} = wp.components;
const {
	InspectorControls,
	InnerBlocks,
} = wp.editor;

registerBlockType('iis/card', {
	title: __('Card'),
	category: 'iis',
	icon: 'text-page',
	keywords: [__('aside'), __('sidebar'), __('content'), __('card')],
	supports: {
		align: ['right', 'wide'],
	},
	attributes: {
		background: {
			type: 'boolean',
			default: false,
		},
	},
	edit({ attributes, setAttributes }) {
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title="Design">
						<CheckboxControl
							label="Background"
							checked={attributes.background}
							onChange={(background) => setAttributes({ background })}
						/>
					</PanelBody>
				</InspectorControls>
				<div style={{
					position: 'relative',
					borderRadius: '.25rem',
					overflow: 'hidden',
					padding: (attributes.background) ? '0.5rem 2rem' : null,
					background: (attributes.background) ? '#fff' : null,
					border: (attributes.background) ? '1px solid #bbb' : null,
				}}
				>
					<InnerBlocks
						allowedBlocks={[
							'core/heading',
							'core/paragraph',
							'core/list',
							'iis/button',
						]}
						template={[['core/heading'], ['core/paragraph']]}
					/>
				</div>
			</Fragment>
		);
	},
	save() {
		return <InnerBlocks.Content />;
	},
});
