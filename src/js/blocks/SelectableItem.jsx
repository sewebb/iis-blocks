const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const { useSelect } = wp.data;
const {
	InnerBlocks,
} = wp.editor;

registerBlockType('iis/selectable-item', {
	title: __('Selectable item'),
	category: 'iis',
	icon: 'megaphone',
	keywords: [__('selectable', 'iis-blocks'), __('views', 'iis-blocks'), __('item', 'iis-blocks')],
	parent: ['iis/selectable'],

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
			<Fragment>
				<div className="iis-block-selectable__item">
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
