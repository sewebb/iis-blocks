import './tabs.css';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { PanelBody, ToggleControl, TextControl } = wp.components;
const {
	InspectorControls,
	InnerBlocks,
} = wp.editor;
const { useSelect } = wp.data;

registerBlockType('iis/tabs', {
	title: __('Tabs'),
	category: 'iis',
	icon: 'table-row-after',
	keywords: [__('tabs', 'iis-blocks'), __('tabbar', 'iis-blocks'), __('tabb', 'iis-blocks')],
	supports: {
		align: ['full'],
	},
	attributes: {
		align: {
			type: 'string',
			default: '',
		},
		wrapped: {
			type: 'boolean',
			default: false,
		},
		updateURL: {
			type: 'boolean',
			default: false,
		},
		gray: {
			type: 'boolean',
			default: false,
		},
		name: {
			type: 'string',
			default: '',
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
			<div className="iis-block-tabs">
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
