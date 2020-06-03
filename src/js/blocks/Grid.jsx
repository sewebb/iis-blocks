import './grid.css';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	InnerBlocks,
} = wp.editor;

registerBlockType('iis/grid', {
	title: __('Grid'),
	category: 'iis',
	icon: 'megaphone',
	keywords: [__('grid', 'iis'), __('columns', 'iis'), __('column', 'iis')],
	supports: {
		// Wide is only used here for more width in editor
		align: ['full', 'wide'],
	},
	attributes: {
		big: {
			type: 'boolean',
			default: false,
		},
		align: {
			type: 'string',
			default: 'wide',
		},
	},
	edit() {
		return (
			<div className="iis-block-grid">
				<InnerBlocks allowedBlocks={['iis/column']} />
			</div>
		);
	},
	save() {
		return <InnerBlocks.Content />;
	},
});
