import './grid.css';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	InnerBlocks,
} = wp.editor;

registerBlockType('iis/glider-hero', {
	title: __('Glider Hero'),
	category: 'iis',
	icon: 'megaphone',
	keywords: [__('glider', 'iis-blocks'), __('slider', 'iis-blocks'), __('slide', 'iis-blocks'), __('hero', 'iis-blocks')],
	getEditWrapperProps() {
		return { 'data-align': 'full' };
	},
	edit() {
		return (
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
		);
	},
	save() {
		return <InnerBlocks.Content />;
	},
});
