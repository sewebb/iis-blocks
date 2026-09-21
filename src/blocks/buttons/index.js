import { registerBlockType } from '@wordpress/blocks';
import {
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import metadata from './block.json';
import './editor.css';

registerBlockType(metadata, {
	edit({ clientId }) {
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

		const blockProps = useBlockProps({ className: 'iis-block-buttons' });

		return (
			<div {...blockProps}>
				<InnerBlocks
					allowedBlocks={['iis/button']}
					template={[['iis/button'], ['iis/button']]}
					orientation="horizontal"
					renderAppender={
						hasChildBlocks
							? undefined
							: () => <InnerBlocks.ButtonBlockAppender />
					}
				/>
			</div>
		);
	},
	save() {
		return <InnerBlocks.Content />;
	},
});
