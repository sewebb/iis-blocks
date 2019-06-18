const { __ } = wp.i18n;
const { registerBlockType, createBlock } = wp.blocks;
const { RichText } = wp.editor;

registerBlockType('iis/preamble', {
	title: __('Preamble'),
	category: 'iis',
	icon: 'editor-paragraph',
	keywords: [__('preamble'), __('text'), __('paragraph')],
	attributes: {
		content: {
			type: 'string',
			default: '',
		},
	},
	edit({ attributes, setAttributes }) {
		return (
			<div style={{ fontWeight: 'bold', fontSize: 'bigger' }}>
				<RichText
					tagName="p"
					value={ attributes.content }
					placeholder={__('Preamble')}
					onChange={ content => setAttributes({ content }) }
				/>
			</div>
		);
	},
	save({ attributes }) {
		return <p className="preamble" dangerouslySetInnerHTML={{ __html: attributes.content }} />;
	},
	transforms: {
		from: [{
			type: 'block',
			blocks: ['core/paragraph'],
			transform(attributes) {
				return createBlock('iis/preamble', {
					content: attributes.content,
				});
			},
		}],
	},
});
