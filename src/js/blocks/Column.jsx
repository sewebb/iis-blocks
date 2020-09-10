import './column.css';

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const { PanelBody, SelectControl } = wp.components;
const { useSelect } = wp.data;
const {
	InspectorControls,
	InnerBlocks,
} = wp.editor;

const columnWidthOptions = [
	{
		label: '1/3',
		value: '1/3',
	},
	{
		label: '1/2',
		value: '1/2',
	},
	{
		label: '2/3',
		value: '2/3',
	},
	{
		label: 'Full width',
		value: '1',
	},
];

registerBlockType('iis/column', {
	title: __('Column'),
	category: 'iis',
	icon: 'megaphone',
	keywords: [__('grid', 'iis'), __('columns', 'iis'), __('column', 'iis')],
	parent: ['iis/grid'],
	attributes: {
		columnWidth: {
			type: 'string',
			default: '1/2',
		},
	},
	getEditWrapperProps(attributes) {
		const { columnWidth } = attributes;

		if (columnWidth) {
			return { 'data-width': columnWidth };
		}

		return {};
	},
	edit({ attributes, setAttributes, clientId }) {
		const { columnWidth } = attributes;
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
				<InspectorControls>
					<PanelBody title="Column width">
						<SelectControl
							label="Width"
							onChange={(width) => setAttributes({ columnWidth: width })}
							options={columnWidthOptions}
							value={columnWidth}
						/>
					</PanelBody>
				</InspectorControls>
				<div className="iis-block-column">
					<div className="iis-block-column__content">
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
