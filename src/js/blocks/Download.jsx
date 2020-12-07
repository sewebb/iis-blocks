const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	RichText,
	MediaUpload,
	MediaUploadCheck,
} = wp.editor;
const { Fragment } = wp.element;
const { Button, TextControl } = wp.components;

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
			default: '',
		},
	},
	edit({ attributes, setAttributes }) {
		return (
			<div>
				<RichText
					identifier="title"
					wrapperClassName="wp-block-heading"
					tagName="h3"
					value={attributes.title}
					onChange={(value) => setAttributes({ title: value })}
					placeholder={__('File title')}
				/>
				<RichText
					identifier="description"
					wrapperClassName="wp-block-paragraph"
					tagName="p"
					value={attributes.content}
					onChange={(value) => setAttributes({ content: value })}
					placeholder={__('File description')}
				/>
				<div style={{ marginTop: '16px' }}>
					{!attributes.file && (
						<Fragment>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={({ url: file }) => setAttributes({ file })}
									value={attributes.file}
									render={({ open }) => (
										<Button className="components-button editor-post-featured-image__toggle" onClick={open}>
											Upload File
										</Button>
									)}
								/>
							</MediaUploadCheck>
							<p><em>or</em></p>
						</Fragment>
					)}
					<TextControl label={__('File URL')} value={attributes.file} onChange={(url) => setAttributes({ file: url })} />
					{attributes.file && (
						<div>
							<Button className="components-button is-button is-default" onClick={() => setAttributes({ file: '' })}>
								Remove file
							</Button>
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
