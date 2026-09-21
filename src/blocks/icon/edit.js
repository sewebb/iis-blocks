import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	RichText,
	withColors,
	PanelColorSettings,
	useBlockProps,
} from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl, ToggleControl } from '@wordpress/components';
import IconSelect from './components/IconSelect';

export default withColors({ iconColor: 'color' })(({
	attributes,
	setAttributes,
	iconColor,
	setIconColor,
}) => {
	const sizes = {
		small: '16px',
		medium: '20px',
		large: '28px',
		supersize: '42px',
	};

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title="Link">
					<TextControl
						label="Url"
						value={attributes.url}
						onChange={(url) => setAttributes({ url })}
					/>
					<ToggleControl
						label="Open in new window"
						checked={attributes.newWindow}
						onChange={(newWindow) => setAttributes({ newWindow })}
					/>
				</PanelBody>
				<PanelBody>
					<SelectControl
						label="Size"
						onChange={(size) => setAttributes({ size })}
						options={[
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
				<PanelColorSettings
					title={__('Color settings')}
					colorSettings={[
						{
							value: iconColor.color,
							onChange: setIconColor,
							label: __('Icon Color'),
						},
					]}
				/>
			</InspectorControls>
			<div style={{ display: 'flex', position: 'relative', alignItems: 'center' }}>
				<div style={{ display: 'inline-block', position: 'relative' }}>
					<IconSelect
						size={attributes.size in sizes ? sizes[attributes.size] : '24px'}
						value={attributes.icon}
						onChange={(icon) => setAttributes({ icon })}
						color={iconColor.color || '#1f2a36'}
					/>
				</div>

				<div style={{ marginLeft: '24px' }}>
					<RichText
						tagName="h2"
						value={attributes.title}
						placeholder={__('Title')}
						style={{ marginTop: 0, marginBottom: 0 }}
						onChange={(title) => setAttributes({ title })}
						allowedFormats={[]}
					/>
					<RichText
						tagName="div"
						value={attributes.text}
						placeholder={__('Content')}
						onChange={(text) => setAttributes({ text })}
						allowedFormats={[]}
					/>
				</div>
			</div>
		</div>
	);
});
