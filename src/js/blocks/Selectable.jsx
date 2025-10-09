import './selectable.css';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	InspectorControls,
	InnerBlocks,
	RichText,
} = wp.editor;
const {
	PanelBody,
	ToggleControl,
	SelectControl,
	TextControl,
} = wp.components;
const { useEffect } = wp.element;

function shortId() {
	return (
		Date.now().toString(36) + Math.random().toString(36).slice(2, 6)
	);
}

const shadows = [
	{
		label: 'None',
		value: 'none',
	},
	{
		label: 'Small',
		value: 'small',
	},
	{
		label: 'Large',
		value: 'large',
	},
];

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
	edit({ attributes, setAttributes }) {
		useEffect(() => {
			if (!attributes.id) {
				setAttributes({ id: `selectable-${shortId()}` });
			}
		}, [attributes.id]);

		return (
			<div className="iis-block-selectable">
				<InspectorControls>
					<PanelBody>
						<TextControl
							label="Id"
							value={attributes.id}
							onChange={(id) => setAttributes({ id })}
							help={__('Give your selectable a unique id. It will be visible in the URL when linking to items.', 'iis-blocks')}
						/>
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
						<SelectControl
							label="Shadow"
							onChange={(shadow) => setAttributes({ shadow })}
							options={shadows}
							value={attributes.shadow}
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
