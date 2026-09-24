import { registerBlockType } from '@wordpress/blocks';
import { useSelect } from '@wordpress/data';
import {
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
import metadata from './block.json';
import '../column/editor.css';

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

		const blockProps = useBlockProps({ className: 'iis-block-column', 'data-width': '1/2' });

		return (
			<div {...blockProps}>
				<div className="iis-block-column__content">
					<InnerBlocks
						allowedBlocks={['iis/testimonial']}
						template={[
							['iis/testimonial'],
						]}
						templateLock="all"
						orientation="horizontal"
						renderAppender={
							hasChildBlocks
								? undefined
								: () => <InnerBlocks.ButtonBlockAppender />
						}
					/>
				</div>
			</div>
		);
	},
	save() {
		return <InnerBlocks.Content />;
	},
});
