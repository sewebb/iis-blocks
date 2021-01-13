const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	InnerBlocks,
} = wp.editor;

registerBlockType('iis/sidebar', {
	title: __('Sidebar'),
	category: 'iis',
	icon: 'megaphone',
	keywords: [__('aside'), __('sidebar'), __('content'), __('free')],
	supports: {
		align: ['right'],
	},
	attributes: {
		align: {
			type: 'string',
			default: 'right',
		},
	},
	edit() {
		return (
			<div style={{
				width: '300px', margin: '0 0 10px 10px', padding: '20px', border: '1px solid #eee',
			}}
			>
				<InnerBlocks />
			</div>
		);
	},
	save() {
		return (
			<aside className="alignright">
				<InnerBlocks.Content />
			</aside>
		);
	},
});
