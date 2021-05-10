import './grid.css';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	InspectorControls,
	InnerBlocks,
	RichText,
} = wp.editor;
const { useSelect } = wp.data;
const { PanelBody, ToggleControl } = wp.components;

registerBlockType('iis/glider', {
	title: __('Glider'),
	category: 'iis',
	icon: 'megaphone',
	keywords: [__('glider', 'iis-blocks'), __('slider', 'iis-blocks'), __('slide', 'iis-blocks')],
	attributes: {
		title: {
			type: 'string',
			default: null,
		},
		pagination: {
			type: 'boolean',
			default: false,
		},
	},
	getEditWrapperProps() {
		return { 'data-align': 'wide' };
	},
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

		return (
			<div className="iis-block-grid">
				<InspectorControls>
					<PanelBody>
						<ToggleControl
							label="Display dots"
							checked={attributes.pagination}
							onChange={(pagination) => setAttributes({ pagination })}
						/>
					</PanelBody>
				</InspectorControls>
				<RichText
					tagName="h1"
					value={attributes.title}
					placeholder={__('Title')}
					onChange={(title) => setAttributes({ title })}
				/>
				<InnerBlocks
					allowedBlocks={['iis/slide']}
					template={[
						['iis/slide'],
						['iis/slide'],
					]}
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
