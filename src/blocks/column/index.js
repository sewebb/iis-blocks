import { Fragment } from '@wordpress/element';
import { registerBlockType } from '@wordpress/blocks';
import { PanelBody, SelectControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import {
	InspectorControls,
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
import metadata from './block.json';
import './editor.css';

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

registerBlockType(metadata, {
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

		const blockProps = useBlockProps({ className: 'iis-block-column', 'data-width': columnWidth || undefined });

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
				<div {...blockProps}>
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
