const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	InnerBlocks,
} = wp.editor;

import './grid.css';

registerBlockType('iis/grid', {
	title: __('Grid'),
	category: 'iis',
	icon: 'megaphone',
	keywords: [__('grid', 'iis'), __('columns', 'iis'), __('column', 'iis')],
	attributes: {
		big: {
			type: 'boolean',
			default: false,
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
