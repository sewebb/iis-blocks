const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	InspectorControls,
	RichText,
	withColors,
	PanelColorSettings,
} = wp.editor;
const { PanelBody, SelectControl, TextControl } = wp.components;

registerBlockType('iis/button', {
	title: __('Button'),
	category: 'iis',
	icon: 'admin-links',
	keywords: [__('button')],
	attributes: {
		size: {
			type: 'string',
			default: 'regular',
		},
		text: {
			type: 'string',
			default: '',
		},
		link: {
			type: 'string',
			default: '',
		},
		buttonColor: {
			type: 'string',
			default: null,
		}
	},
	edit: withColors({ buttonColor: 'color' })(({ attributes, setAttributes, buttonColor, setButtonColor }) => {
		const sizes = [
			{value: 'small', label: 'Small'},
			{value: 'regular', label: 'Default'},
			{value: 'large', label: 'Large'},
		];

		const buttonStyle = {
			display: 'inline-block',
			position: 'relative',
			margin: '0',
			padding: '.556rem 1rem',
			overflow: 'hidden',
			border: '0',
			borderRadius: '.25rem',
			backgroundColor: (buttonColor.color) ? buttonColor.color : '#0477ce',
			color: '#fff',
			fontFamily: 'sans-serif',
			textDecoration: 'none',
			textShadow: 'none',
			hyphens: 'auto',
			cursor: 'pointer',
		};

		if ( 'small' === attributes.size ) {
			buttonStyle.padding = '.3rem .75rem';
			buttonStyle.fontSize = '.88889rem';
		} else if ( 'large' === attributes.size ) {
			buttonStyle.padding = '.8rem 2rem';
			buttonStyle.fontSize = '1.33333rem';
		} else {
			buttonStyle.fontSize = '.88889rem';
		}

		console.log(buttonColor);

		if ( !buttonColor.slug || ['jade-dark', 'ruby-dark', 'ocean-dark'].includes(buttonColor.slug) ) {
			buttonStyle.color = '#fff';
		} else {
			buttonStyle.color = '#1f2a36';
		}

		return (
			<div>
				<InspectorControls>
					<PanelBody>
						<SelectControl
							label={ __( 'Size' ) }
							options={ sizes }
							value={ attributes.size }
							onChange={ ( size ) => setAttributes( { size } ) }
						/>
						<TextControl
							label={ __( 'URL' ) }
							value={ attributes.link }
							help={(attributes.link) ? (<a style={{ display: 'block', marginTop: '1rem' }} href={attributes.link} target="_blank">{ __( 'Test link' ) }</a>) : null}
							type="url"
							onChange={( link ) => setAttributes({ link })}
						/>
					</PanelBody>
					<PanelColorSettings
						title={__('Color Settings')}
						colorSettings={[
							{
								value: buttonColor.color,
								onChange: setButtonColor,
								label: __('Button Color'),
							},
						]}
					/>
				</InspectorControls>
				<div>
					<div style={buttonStyle}>
						<RichText
							tagName="span"
							value={ attributes.text }
							placeholder={ __('Button text') }
							onChange={ text => setAttributes( { text } ) }
						/>
					</div>
				</div>
			</div>
		);
	}),
	save({ attributes }) {
		return null;
	},
});
