import './grid.css';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { TextControl, PanelBody } = wp.components;
const {
	InnerBlocks,
	InspectorControls,
} = wp.editor;

registerBlockType('iis/glider-hero', {
	title: __('Glider Hero'),
	category: 'iis',
	icon: 'leftright',
	keywords: [__('glider', 'iis-blocks'), __('slider', 'iis-blocks'), __('slide', 'iis-blocks'), __('hero', 'iis-blocks')],
	getEditWrapperProps() {
		return { 'data-align': 'full' };
	},
	attributes: {
		autoScrollTime: {
			type: 'number',
			default: null,
		},
	},
	edit({ attributes, setAttributes }) {
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody>
						<TextControl
							label={__('Auto scroll', 'iis-blocks')}
							placeholder={__('Time until next slide in milliseconds', 'iis-blocks')}
							value={attributes.autoScrollTime}
							type="number"
							onChange={(v) => setAttributes({ autoScrollTime: parseInt(v, 10) })}
						/>
					</PanelBody>
				</InspectorControls>
				<div style={{ background: '#eee', padding: '20px 0 0', borderBottom: '4px solid #757575' }}>
					<InnerBlocks
						allowedBlocks={['iis/hero-hero-slide']}
						template={[
							['iis/hero-slide'],
							['iis/hero-slide'],
						]}
						orientation="vertical"
					/>
				</div>
			</Fragment>
		);
	},
	save() {
		return <InnerBlocks.Content />;
	},
});
