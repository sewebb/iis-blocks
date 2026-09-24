import { registerBlockType } from '@wordpress/blocks';
import {
	InspectorControls,
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { PanelBody, ToggleControl } from '@wordpress/components';
import metadata from './block.json';
import './editor.css';

registerBlockType(metadata, {
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

		const blockProps = useBlockProps({ className: 'iis-block-grid' });

		return (
			<div {...blockProps}>
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
