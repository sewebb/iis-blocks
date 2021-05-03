import './buttons.css';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	InnerBlocks,
} = wp.editor;
const { useSelect } = wp.data;

registerBlockType('iis/buttons', {
	title: __('Buttons'),
	category: 'iis',
	icon: 'admin-links',
	keywords: [__('buttons', 'iis-blocks'), __('button', 'iis-blocks'), __('action', 'iis-blocks')],
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

		return (
			<div className="iis-block-buttons">
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
