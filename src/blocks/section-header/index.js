import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import metadata from './block.json';

registerBlockType(metadata, {
	edit({ attributes, setAttributes }) {
		return (
			<div {...useBlockProps({ style: { paddingBottom: '0.5rem', borderBottom: '1px solid #ccc' } })}>
				<RichText
					tagName="span"
					value={attributes.preTitle}
					placeholder={__('Content')}
					style={{ fontSize: 'small', textTransform: 'uppercase' }}
					onChange={(preTitle) => setAttributes({ preTitle })}
				/>
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
