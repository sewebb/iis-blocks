import IconSelect from '../components/IconSelect';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	InspectorControls,
	RichText,
} = wp.editor;
const { PanelBody, SelectControl } = wp.components;

registerBlockType('iis/icon', {
	title: __('Icon'),
	category: 'iis',
	icon: 'megaphone',
	keywords: [__('icon')],
	attributes: {
		size: {
			type: 'string',
			default: null,
		},
		icon: {
			type: 'string',
			default: null,
		},
		title: {
			type: 'string',
			default: null,
		},
		text: {
			type: 'string',
			default: null,
		},
	},
	edit({ attributes, setAttributes }) {
		const sizes = {
			small: '16px',
			medium: '20px',
			large: '28px',
			supersize: '42px',
		};

		return (
			<div>
				<InspectorControls>
					<PanelBody>
						<SelectControl
							label="Size"
							onChange={(size) => setAttributes({ size })}
							options={[
								{
									label: 'Default',
									value: null,
								},
								{
									label: 'Small',
									value: 'small',
								},
								{
									label: 'Medium',
									value: 'medium',
								},
								{
									label: 'Large',
									value: 'large',
								},
								{
									label: 'Supersize',
									value: 'supersize',
								},
							]}
							value={attributes.size}
						/>
					</PanelBody>
				</InspectorControls>
				<div style={{ display: 'flex', position: 'relative', alignItems: 'center' }}>
					<div style={{ display: 'inline-block', position: 'relative' }}>
						<IconSelect size={attributes.size in sizes ? sizes[attributes.size] : '24px'} value={attributes.icon} onChange={(icon) => setAttributes({ icon })} />
					</div>

					<div style={{ marginLeft: '24px' }}>
						<RichText
							tagName="h2"
							value={attributes.title}
							placeholder={__('Title')}
							style={{ marginTop: 0, marginBottom: 0 }}
							onChange={(title) => setAttributes({ title })}
						/>
						<RichText
							tagName="div"
							value={attributes.text}
							placeholder={__('Content')}
							onChange={(text) => setAttributes({ text })}
						/>
					</div>
				</div>
			</div>
		);
	},
	save() {
		return null;
	},
});
