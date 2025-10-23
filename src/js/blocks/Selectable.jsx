import './selectable.css';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	InspectorControls,
	InnerBlocks,
	RichText,
	withColors,
	PanelColorSettings,
} = wp.editor;
const {
	PanelBody,
	ToggleControl,
	SelectControl,
	TextControl,
} = wp.components;
const { useEffect, Fragment } = wp.element;

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
		full: {
			type: 'boolean',
			default: false,
		},
		background: {
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
		buttonColor: {
			type: 'string',
			default: 'ocean',
		},
		copyButtonColor: {
			type: 'string',
			default: 'ocean-light',
		},
		articleIndent: {
			type: 'boolean',
			default: false,
		},
	},
	edit: withColors({ buttonColor: 'color', copyButtonColor: 'color' })(({
		attributes,
		setAttributes,
		buttonColor,
		setButtonColor,
		copyButtonColor,
		setCopyButtonColor,
	}) => {
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
							label="Article indent"
							checked={attributes.articleIndent}
							onChange={(articleIndent) => setAttributes({ articleIndent })}
						/>
						<ToggleControl
							label="Full width"
							checked={attributes.full}
							onChange={(full) => setAttributes({ full })}
						/>
						<ToggleControl
							label="Background"
							checked={attributes.background}
							onChange={(background) => setAttributes({ background })}
						/>
						{attributes.background && (
							<Fragment>
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
							</Fragment>
						)}
					</PanelBody>
					<PanelColorSettings
						title={__('Colors')}
						colorSettings={[
							{
								value: buttonColor.color,
								onChange: setButtonColor,
								label: __('"Show all" Button Color'),
							},
							{
								value: copyButtonColor.color,
								onChange: setCopyButtonColor,
								label: __('"Copy" Button Color'),
							},
						]}
					/>
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
	}),
	save() {
		return <InnerBlocks.Content />;
	},
});
