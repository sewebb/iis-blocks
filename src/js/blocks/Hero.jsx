const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const { PanelBody, Button } = wp.components;
const {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
} = wp.editor;

registerBlockType('iis/hero', {
	title: __('Hero'),
	category: 'iis',
	icon: 'megaphone',
	keywords: [__('hero'), __('title')],
	supports: {
		align: ['full', 'center'],
	},
	attributes: {
		mediaUrl: {
			type: 'string',
			default: null,
		},
		mediaId: {
			type: 'number',
			default: null,
		},
		title: {
			type: 'string',
			default: '',
		},
		introText: {
			type: 'string',
			default: '',
		},
		alignment: {
			type: 'string',
			default: 'full',
		},
	},
	edit({ attributes, setAttributes }) {
		const style = {
			position: 'relative',
			textAlign: 'left',
			color: '#fff',
			backgroundColor: '#1f2a36',
		};

		const imageStyle = {
			minHeight: '27.77778rem',
			maxHeight: '50vh',
			objectFit: 'cover',
			width: '100%',
			display: 'block',
		};

		const contentStyle = {
			position: 'absolute',
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			display: 'flex',
			alignItems: 'flex-end',
			textShadow: '0 0 1rem rgba(0,0,0,.5)',
			backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,0) 0,transparent 55%,#000)',
		};

		const innerContentStyle = {
			padding: '4rem',
			maxWidth: '80%',
		};

		let image = null;

		if (attributes.mediaUrl) {
			image = <img src={attributes.mediaUrl} alt="" style={{width: '100%', height: 'auto'}}/>;
		}

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title="Background image">
						<p>{image}</p>
						{attributes.mediaUrl === null && (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={imageObject => (
										setAttributes({
											mediaUrl: imageObject.sizes.full.url,
											mediaId: imageObject.id,
										})
									)}
									type="image"
									value={attributes.mediaUrl}
									render={({open}) => (
										<Button className="components-button editor-post-featured-image__toggle"
												onClick={open}>
											Upload Image!
										</Button>
									)}
								/>
							</MediaUploadCheck>
						)}
						{attributes.mediaUrl !== null && (
							<Button className="components-button is-button is-default"
									onClick={() => setAttributes({mediaUrl: null})}>
								Remove background
							</Button>
						)}
					</PanelBody>
				</InspectorControls>
				<div style={style}>
					<img src={attributes.mediaUrl} style={imageStyle} />
					<div style={contentStyle}>
						<div style={innerContentStyle}>
							<RichText
								tagName="h1"
								value={ attributes.title }
								placeholder={__('Title')}
								onChange={ title => setAttributes({ title }) }
							/>
							<RichText
								tagName="p"
								value={ attributes.introText }
								placeholder={__('Content')}
								onChange={ introText => setAttributes({ introText }) }
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	},
	save() {
		return null;
	},
});
