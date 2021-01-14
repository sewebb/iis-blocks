import './grid.css';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	InspectorControls,
	InnerBlocks,
} = wp.editor;
const { useSelect } = wp.data;
const { PanelBody, ToggleControl } = wp.components;

registerBlockType('iis/grid', {
	title: __('Grid'),
	category: 'iis',
	icon: 'megaphone',
	keywords: [__('grid', 'iis'), __('columns', 'iis'), __('column', 'iis')],
	supports: {
		align: ['full', 'center'],
	},
	attributes: {
		align: {
			type: 'string',
			default: 'center',
		},
		asymmetric: {
			type: 'boolean',
			default: false,
		},
	},
	getEditWrapperProps(attributes) {
		const { align } = attributes;

		if (align === 'center') {
			return { 'data-align': 'wide' };
		}

		return {};
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
							label="Asymmetric"
							checked={attributes.asymmetric}
							onChange={(asymmetric) => setAttributes({ asymmetric })}
						/>
					</PanelBody>
				</InspectorControls>
				<InnerBlocks
					allowedBlocks={['iis/column']}
					template={[['iis/column'], ['iis/column']]}
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
