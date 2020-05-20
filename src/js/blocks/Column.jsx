const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	InnerBlocks,
} = wp.editor;

import './grid.css';

registerBlockType('iis/column', {
	title: __('Grid'),
	category: 'iis',
	icon: 'megaphone',
	keywords: [__('grid', 'iis'), __('columns', 'iis'), __('column', 'iis')],
	parent: ['iis/grid'],
	attributes: {
		big: {
			type: 'boolean',
			default: false,
		},
	},
	edit() {
		return <InnerBlocks />;
	},
	save() {
		return <InnerBlocks.Content />;
	},
});
