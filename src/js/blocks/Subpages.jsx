const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType('iis/subpages', {
	title: __('Submenu', 'iis-blocks'),
	category: 'iis',
	icon: 'admin-page',
	keywords: [__('pages', 'iis-blocks'), __('sub', 'iis-blocks')],
	supports: {
		align: ['right', 'wide'],
	},
	attributes: {
		align: {
			type: 'string',
			default: 'right',
		},
	},
	edit({ attributes }) {
		return (
			<div style={{ width: (attributes.align === 'right') ? '300px' : 'auto', padding: '20px', border: '1px solid #eee' }}>
				<strong>{`« ${__('Submenu', 'iis-blocks')} »`}</strong>
			</div>
		);
	},

	save() {
		return null;
	},
});
