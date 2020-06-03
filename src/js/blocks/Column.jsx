import './column.css';

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const { PanelBody, SelectControl } = wp.components;
const {
	InspectorControls,
	InnerBlocks,
} = wp.editor;

const columnWidthOptions = [
	{
		label: 'Two columns',
		value: '1/2',
	},
	{
		label: 'Three columns',
		value: '1/3',
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
			default: '',
		},
	},
	getEditWrapperProps(attributes) {
		const { columnWidth } = attributes;

		if (columnWidth) {
			return { 'data-width': columnWidth };
		}

		return {};
	},
	edit({ attributes, setAttributes }) {
		const { columnWidth } = attributes;

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title="Column width">
						<SelectControl
							label="Width"
							onChange={(width) => setAttributes({ columnWidth: width })}
							options={[
								{
									label: 'Choose a with',
									value: '',
								},
								...columnWidthOptions,
							]}
							value={columnWidth}
						/>
					</PanelBody>
				</InspectorControls>
				<div className="iis-block-column">
					<div className="iis-block-column__content">
						<InnerBlocks />
					</div>
				</div>
			</Fragment>
		);
	},
	save() {
		return <InnerBlocks.Content />;
	},
});
