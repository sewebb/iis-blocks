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
		align: ['full', 'center'],
	},
	attributes: {
		big: {
			type: 'boolean',
			default: false,
		},
		align: {
			type: 'string',
			default: 'center',
		},
	},
	getEditWrapperProps(attributes) {
		const { align } = attributes;

		if (align === 'center') {
			return { 'data-align': 'wide' };
		}

		return {};
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
