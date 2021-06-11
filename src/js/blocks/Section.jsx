import './section.css';

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const {
	InspectorControls,
	InnerBlocks,
	withColors,
	PanelColorSettings,
} = wp.editor;
const { PanelBody, ToggleControl, SelectControl } = wp.components;

registerBlockType('iis/section', {
	title: __('Section'),
	category: 'iis',
	icon: 'align-center',
	keywords: [__('section')],
	attributes: {
		white: {
			type: 'boolean',
			default: false,
		},
		align: {
			type: 'string',
			default: 'full',
		},
		highlightColor: {
			type: 'string',
			default: 'ruby-light',
		},
		decoration: {
			type: 'string',
			default: null,
		},
		style: {
			type: 'string',
			default: 'landing-page',
		},
		backgroundColor: {
			type: 'string',
			default: null,
		},
	},
	supports: {
		align: ['full'],
	},
	edit: withColors({ highlightColor: 'color', backgroundColor: 'background' })(({
		attributes,
		setAttributes,
		highlightColor,
		setHighlightColor,
		backgroundColor,
		setBackgroundColor,
	}) => {
		const style = {
			backgroundColor: (attributes.white) ? '#fff' : '#ededed',
			border: (attributes.white) ? '1px dashed #ededed' : null,
			padding: '20px 0',
		};

		if (attributes.style === 'colored-background' && backgroundColor) {
			style.backgroundColor = backgroundColor.color;
		}

		const className = `iis-block-section iis-block-section--${highlightColor.slug}`;

		return (
			<div className={className}>
				<InspectorControls>
					<PanelBody title="Design">
						<SelectControl
							label="Style"
							onChange={(val) => setAttributes({ style: val })}
							options={[
								{
									label: 'Snedställd bakgrund',
									value: 'landing-page',
								},
								{
									label: 'Standard',
									value: 'colored-background',
								},
							]}
							value={attributes.style}
						/>
						{attributes.style === 'landing-page' && (
							<Fragment>
								<ToggleControl
									label="Vit bakgrund"
									checked={attributes.white}
									onChange={(white) => setAttributes({ white })}
								/>
								<SelectControl
									label="Dekoration"
									onChange={(decoration) => setAttributes({ decoration })}
									options={[
										{
											label: 'Ingen',
											value: null,
										},
										{
											label: 'Rektangel till vänster',
											value: 'rectangle-left',
										},
										{
											label: 'Rektangel till höger',
											value: 'rectangle-right',
										},
									]}
									value={attributes.decoration}
								/>
							</Fragment>
						)}
					</PanelBody>
					{attributes.style === 'landing-page' && (
						<PanelColorSettings
							title={__('Color settings')}
							colorSettings={[
								{
									colors: [
										{
											name: __('Ruby'),
											slug: 'ruby-light',
											color: '#ff9fb4',
										},
										{
											name: __('Peacock'),
											slug: 'peacock-light',
											color: '#e0bff5',
										},
										{
											name: __('Jade'),
											slug: 'jade-light',
											color: '#aae3d9',
										},
									],
									value: highlightColor.color,
									onChange: setHighlightColor,
									label: __('Highlight Color'),
								},
							]}
						/>
					)}
					{attributes.style === 'colored-background' && (
						<PanelColorSettings
							title={__('Color settings')}
							colorSettings={[
								{
									colors: [
										{
											name: __('Ruby'),
											slug: 'rub-light',
											color: '#ff9fb4',
										},
										{
											name: __('Peacock'),
											slug: 'peacock-light',
											color: '#e0bff5',
										},
										{
											name: __('Jade'),
											slug: 'jade-light',
											color: '#aae3d9',
										},
										{
											name: __('Sandstone'),
											slug: 'sandstone-light',
											color: '#fcccb1',
										},
										{
											name: __('Lemon'),
											slug: 'lemon-light',
											color: '#ffe696',
										},
										{
											name: __('Ocean'),
											slug: 'ocean-light',
											color: '#a7d8fd',
										},
									],
									value: backgroundColor.color,
									onChange: setBackgroundColor,
									label: __('Background Color'),
								},
							]}
						/>
					)}
				</InspectorControls>
				<div style={style}>
					<InnerBlocks />
				</div>
			</div>
		);
	}),
	save() {
		return <InnerBlocks.Content />;
	},
});
