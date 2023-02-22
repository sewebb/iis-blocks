const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	RichText,
} = wp.editor;

registerBlockType('iis/section-report-header', {
	title: __('Section Report Header'),
	category: 'iis',
	icon: 'align-center',
	keywords: [__('section'), __('title')],
	attributes: {
		title: {
			type: 'string',
			default: '',
		},
		text: {
			type: 'string',
			default: '',
		}
	},
	parent: 'iis/section',
	edit({ attributes, setAttributes }) {
		return (
			<div style={{ paddingBottom: '0.5rem', borderBottom: '1px solid #ccc' }}>
				<RichText
					tagName="h1"
					value={attributes.title}
					placeholder={__('Title')}
					style={{ marginTop: 0 }}
					onChange={(title) => setAttributes({ title })}
				/>
				<RichText
					tagName="p"
					value={attributes.text}
					placeholder={__('Content')}
					onChange={(text) => setAttributes({ text })}
				/>
			</div>
		);
	},
	save() {
		return null;
	},
});
