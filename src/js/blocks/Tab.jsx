import './tab.css';

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const { PanelBody, SelectControl } = wp.components;
const { useSelect } = wp.data;
const {
	InspectorControls,
	InnerBlocks,
} = wp.editor;
const {
	RichText,
} = wp.editor;

registerBlockType('iis/tab', {
	title: __('Tab'),
	category: 'iis',
	icon: 'category',
	keywords: [__('tabb', 'iis-blocks'), __('tabs', 'iis-blocks'), __('tabbar', 'iis-blocks')],
	parent: ['iis/tabs'],
	attributes: {
		tab_title: {
			type: 'string',
			default: null,
		},
	},
	edit({ attributes, setAttributes, clientId }) {
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
				<div className="iis-block-tab">
					<div className="iis-block-tab__tab">
						<RichText
							identifier="title"
							tagName="h2"
							value={attributes.tab_title}
							onChange={(value) => setAttributes({ tab_title: value })}
							placeholder="Tabbens titel"
						/>
					</div>
					<div className="iis-block-tab__content">
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
