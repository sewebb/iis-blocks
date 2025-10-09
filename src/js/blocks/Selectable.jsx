import './selectable.css';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	InspectorControls,
	InnerBlocks,
	RichText,
} = wp.editor;
const { PanelBody, ToggleControl } = wp.components;
const { useEffect } = wp.element;

registerBlockType('iis/selectable', {
	title: __('Selectable'),
	category: 'iis',
	icon: 'megaphone',
	keywords: [__('selectable', 'iis-blocks'), __('views', 'iis-blocks'), __('select', 'iis-blocks')],
	supports: {
		align: ['full', 'center'],
	},
	attributes: {
		id: {
			type: 'string',
			default: '',
		},
		title: {
			type: 'string',
			default: '',
		},
		wrapped: {
			type: 'boolean',
			default: false,
		},
		transparent: {
			type: 'boolean',
			default: false,
		},
		shadow: {
			type: 'string',
			default: 'small',
		},
		rounded: {
			type: 'boolean',
			default: false,
		},
	},
	edit({ attributes, setAttributes, clientId }) {
		useEffect(() => {
			if (!attributes.id) {
				setAttributes({ id: `selectable-${clientId}` });
			}
		}, [clientId, attributes.id]);

		return (
			<div className="iis-block-selectable">
				<InspectorControls>
					<PanelBody>
						<ToggleControl
							label="Wrapped"
							checked={attributes.wrapped}
							onChange={(wrapped) => setAttributes({ wrapped })}
						/>
						<ToggleControl
							label="Transparent"
							checked={attributes.transparent}
							onChange={(transparent) => setAttributes({ transparent })}
						/>
						<ToggleControl
							label="Rounded"
							checked={attributes.rounded}
							onChange={(rounded) => setAttributes({ rounded })}
						/>
					</PanelBody>
				</InspectorControls>
				<RichText
					tagName="strong"
					value={attributes.title}
					placeholder={__('Title')}
					style={{ margin: 0 }}
					onChange={(title) => setAttributes({ title })}
				/>
				<InnerBlocks
					allowedBlocks={['iis/selectable-item']}
					template={[['iis/selectable-item'], ['iis/selectable-item']]}
					orientation="horizontal"
					renderAppender={
						() => <InnerBlocks.ButtonBlockAppender />
					}
				/>
			</div>
		);
	},
	save() {
		return <InnerBlocks.Content />;
	},
});
