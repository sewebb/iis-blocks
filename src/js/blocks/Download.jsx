const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	RichText,
	MediaUpload,
	MediaUploadCheck,
} = wp.editor;
const { Button } = wp.components;

registerBlockType('iis/download', {
	title: __('Download'),
	category: 'iis',
	icon: 'download',
	keywords: [__('download'), __('pdf'), __('attach')],
	attributes: {
		title: {
			type: 'string',
			default: null,
		},
		content: {
			type: 'string',
			default: null,
		},
		file: {
			type: 'string',
			default: null,
		},
	},
	edit({ attributes, setAttributes }) {
		return (
			<div>
				<RichText
					identifier="content"
					wrapperClassName="wp-block-heading"
					tagName="h3"
					value={ attributes.title }
					onChange={ value => setAttributes({ title: value }) }
					placeholder={__('File title')}
				/>
				<RichText
					identifier="content"
					wrapperClassName="wp-block-paragraph"
					tagName="p"
					value={ attributes.content }
					onChange={ value => setAttributes({ content: value }) }
					placeholder={__('File description')}
				/>
				<div style={{ marginTop: '16px' }}>
					{attributes.file === null && (
						<MediaUploadCheck>
							<MediaUpload
								onSelect={({ url: file }) => setAttributes({ file })}
								type="pdf"
								value={attributes.file}
								render={({ open }) => (
									<Button className="components-button editor-post-featured-image__toggle" onClick={open}>
										Upload PDF
									</Button>
								)}
							/>
						</MediaUploadCheck>
					)}
					{attributes.file !== null && (
						<div>
							<Button className="components-button is-button is-default" onClick={() => setAttributes({ file: null })}>
								Remove file
							</Button>
							<small style={{ display: 'block', color: '#ccc' }}>{attributes.file}</small>
						</div>
					)}
				</div>
			</div>
		);
	},
	save() {
		return null;
	},
});
