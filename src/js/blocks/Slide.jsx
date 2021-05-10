const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { useSelect } = wp.data;
const {
	InnerBlocks,
} = wp.editor;

registerBlockType('iis/slide', {
	title: __('Slide'),
	category: 'iis',
	icon: 'megaphone',
	keywords: [__('slide', 'iis-blocks'), __('slider', 'iis-blocks'), __('glider', 'iis-blocks')],
	parent: ['iis/glider'],
	getEditWrapperProps() {
		return { 'data-width': '1/2' };
	},
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
			<div className="iis-block-column">
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
