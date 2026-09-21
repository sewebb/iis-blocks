import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { PanelBody, ToggleControl, TextControl } from '@wordpress/components';
import {
	InspectorControls,
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
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

		const blockProps = useBlockProps({ className: 'iis-block-tabs' });

		return (
			<div {...blockProps}>
				<InspectorControls>
					<PanelBody>
						<TextControl
							label={__('Name', 'iis-blocks')}
							placeholder={__('My tabs', 'iis-blocks')}
							help={__('Give your tabs a unique name. It will be visible in the URL when tabbing.', 'iis-blocks')}
							value={attributes.name}
							onChange={(name) => setAttributes({ name })}
						/>
						<ToggleControl
							label="Update URLs"
							checked={attributes.updateURL}
							onChange={(updateURL) => setAttributes({ updateURL })}
						/>
						<ToggleControl
							label="Wrapped tabs"
							checked={attributes.wrapped}
							onChange={(wrapped) => setAttributes({ wrapped })}
						/>
						<ToggleControl
							label="Gray background"
							checked={attributes.gray}
							onChange={(gray) => setAttributes({ gray })}
						/>
					</PanelBody>
				</InspectorControls>
				<InnerBlocks
					allowedBlocks={['iis/tab']}
					template={[['iis/tab'], ['iis/tab']]}
					orientation="vertical"
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
