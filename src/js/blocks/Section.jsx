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
					<PanelBody title={__('Design', 'iis-blocks')}>
						<SelectControl
							label={__('Style', 'iis-blocks')}
							onChange={(val) => setAttributes({ style: val })}
							options={[
								{
									label: __('Landing page', 'iis-blocks'),
									value: 'landing-page',
								},
								{
									label: __('Colored background', 'iis-blocks'),
									value: 'colored-background',
								},
							]}
							value={attributes.style}
						/>
						{attributes.style === 'landing-page' && (
							<Fragment>
								<ToggleControl
									label={__('White background', 'iis-blocks')}
									checked={attributes.white}
									onChange={(white) => setAttributes({ white })}
								/>
								<SelectControl
									label={__('Decoration', 'iis-blocks')}
									onChange={(decoration) => setAttributes({ decoration })}
									options={[
										{
											label: __('None', 'iis-blocks'),
											value: null,
										},
										{
											label: __('Rectangle left', 'iis-blocks'),
											value: 'rectangle-left',
										},
										{
											label: __('Rectangle right', 'iis-blocks'),
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
							title={__('Color settings', 'iis-blocks')}
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
									label: __('Color of rectangle', 'iis-blocks'),
								},
							]}
						/>
					)}
					{attributes.style === 'colored-background' && (
						<PanelColorSettings
							title={__('Color settings', 'iis-blocks')}
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
										{
											name: __('Snow'),
											slug: 'snow',
											color: '#ffffff',
										},
									],
									value: backgroundColor.color,
									onChange: setBackgroundColor,
									label: __('Background Color', 'iis-blocks'),
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
