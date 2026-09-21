import { Fragment } from '@wordpress/element';
import { registerBlockType } from '@wordpress/blocks';
import { useSelect } from '@wordpress/data';
import {
	InnerBlocks,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import metadata from './block.json';
import './editor.css';

registerBlockType(metadata, {
	edit({ attributes, setAttributes, clientId }) {
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

		const blockProps = useBlockProps({ className: 'iis-block-tab' });

		return (
			<Fragment>
				<div {...blockProps}>
					<div className="iis-block-tab__tab">
						<RichText
							identifier="title"
							tagName="h2"
							value={attributes.tab_title}
							onChange={(value) => setAttributes({ tab_title: value })}
							placeholder="Tabbens titel"
						/>
					</div>
					<div className="iis-block-tab__content">
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
