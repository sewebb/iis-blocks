import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText, MediaUpload, MediaUploadCheck, useBlockProps } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import { Button, TextControl } from '@wordpress/components';
import metadata from './block.json';

registerBlockType(metadata, {
	edit({ attributes, setAttributes }) {
		return (
			<div {...useBlockProps()}>
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
								Remove
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
