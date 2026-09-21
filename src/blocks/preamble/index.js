import { __ } from '@wordpress/i18n';
import { registerBlockType, createBlock } from '@wordpress/blocks';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import metadata from './block.json';

registerBlockType(metadata, {
	edit({ attributes, setAttributes }) {
		return (
			<div {...useBlockProps({ style: { fontWeight: 'bold', fontSize: 'bigger' } })}>
				<RichText
					tagName="p"
					value={attributes.content}
					placeholder={__('Preamble')}
					onChange={(content) => setAttributes({ content })}
				/>
			</div>
		);
	},
	save({ attributes }) {
		return <p {...useBlockProps.save({ className: 'preamble' })} dangerouslySetInnerHTML={{ __html: attributes.content }} />;
	},
	transforms: {
		from: [{
			type: 'block',
			blocks: ['core/paragraph'],
			transform(attributes) {
				return createBlock('iis/preamble', {
					content: attributes.content,
					supports: {
						anchor: true,
					},
				});
			},
		}],
	},
});
