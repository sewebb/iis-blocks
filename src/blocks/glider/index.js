import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import {
	InspectorControls,
	InnerBlocks,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { PanelBody, ToggleControl } from '@wordpress/components';
import metadata from './block.json';
import '../grid/editor.css';

registerBlockType(metadata, {
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

		const blockProps = useBlockProps({ className: 'iis-block-grid' });

		return (
			<div {...blockProps}>
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
