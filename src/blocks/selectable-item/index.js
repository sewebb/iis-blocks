import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { registerBlockType } from '@wordpress/blocks';
import { useSelect } from '@wordpress/data';
import {
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	TextControl,
} from '@wordpress/components';
import metadata from './block.json';
import './editor.css';

registerBlockType(metadata, {
	edit({ clientId, attributes, setAttributes }) {
		const { hasChildBlocks } = useSelect(
			(select) => {
				const { getBlockOrder, getBlockRootClientId } = select(
					'core/block-editor',
				);

				return {
					hasChildBlocks: getBlockOrder(clientId).length > 0,
					rootClientId: getBlockRootClientId(clientId),
				};
			},
			[clientId],
		);

		const blockProps = useBlockProps({ className: 'iis-block-selectable__item' });

		return (
			<Fragment>
				<div {...blockProps}>
					<TextControl
						label="Title"
						value={attributes.title}
						placeholder={__('Title')}
						onChange={(title) => setAttributes({ title })}
					/>
					<div className="iis-block-selectable__item__content">
						<InnerBlocks
							renderAppender={
								hasChildBlocks
									? undefined
									: () => <InnerBlocks.ButtonBlockAppender />
							}
						/>
					</div>
				</div>
			</Fragment>
		);
	},
	save() {
		return <InnerBlocks.Content />;
	},
});
