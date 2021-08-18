const { __ } = wp.i18n;
const { Fragment, useState, useEffect } = wp.element;
const { registerBlockType } = wp.blocks;
const {
	CheckboxControl,
	PanelBody,
	Button,
	TextControl,
} = wp.components;
const {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	InnerBlocks,
	RichText,
} = wp.editor;

function PlayIcon() {
	return (
		<svg id="icon-play" viewBox="0 0 32 32" width={87} height={87}>
			<path fill="#fff" d="M16 28.5c6.9 0 12.5-5.6 12.5-12.5S22.9 3.5 16 3.5 3.5 9.1 3.5 16 9.1 28.5 16 28.5m0 3C7.4 31.5.5 24.6.5 16S7.4.5 16 .5 31.5 7.4 31.5 16 24.6 31.5 16 31.5" />
			<path fill="#fff" d="M11.7 8.2l11.4 7.7-11.4 7.7z" />
		</svg>
	);
}

function parseYoutube(url) {
	if (!url) {
		return null;
	}

	const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
	const match = url.match(regExp);
	return (match && match[7].length === 11) ? match[7] : false;
}

registerBlockType('iis/card', {
	title: __('Card', 'iis-blocks'),
	category: 'iis',
	icon: 'text-page',
	keywords: [__('aside'), __('sidebar'), __('content'), __('card')],
	supports: {
		align: ['right', 'wide'],
	},
	attributes: {
		background: {
			type: 'boolean',
			default: false,
		},
		showAsTeaser: {
			type: 'boolean',
			default: false,
		},
		showOnMobile: {
			type: 'boolean',
			default: false,
		},
		imageId: {
			type: 'number',
			default: null,
		},
		youtube: {
			type: 'string',
			default: null,
		},
		pretitle: {
			type: 'string',
			default: '',
		},
		title: {
			type: 'string',
			default: '',
		},
		url: {
			type: 'string',
			default: null,
		},
		target: {
			type: 'string',
			default: '_self',
		},
		align: {
			type: 'string',
			default: null,
		},
		displayDates: {
			type: 'boolean',
			default: false,
		},
		shadow: {
			type: 'boolean',
			default: false,
		},
	},
	edit({ attributes, setAttributes }) {
		const [imageSizes, setImageSizes] = useState(null);
		const [imagePreview, setImagePreview] = useState(null);
		const youtubeId = parseYoutube(attributes.youtube);
		const youtubeUrl = (youtubeId) ? `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0` : null;
		const mediaPreview = (imagePreview || youtubeUrl) ? imagePreview || `https://i3.ytimg.com/vi/${youtubeId}/maxresdefault.jpg` : null;
		const {
			showAsTeaser,
			background,
		} = attributes;
		const styleCard = {
			position: 'relative',
			border: (background) ? '1px solid #bbb' : null,
			borderRadius: '.25rem',
			overflow: 'hidden',
		};

		if (attributes.shadow) {
			styleCard.boxShadow = '0 4rem 6rem rgb(31 42 54 / 20%)';
		}

		const styleCardContent = {
			padding: (background) ? '1rem' : null,
		};

		const styleCardImage = {
			width: '100%',
			display: 'block',
			borderRadius: '.25rem .25rem 0 0',
		};

		const styleTeaserImage = {
			width: '100%',
			height: '100%',
			minHeight: '300px',
			display: 'block',
			objectFit: 'cover',
		};

		const styleTeaserContent = {
			display: 'flex',
			flexDirection: 'column',
			alignContent: 'stretch',
			justifyContent: 'flex-end',
			position: 'absolute',
			right: 0,
			bottom: 0,
			left: 0,
			textShadow: '0 0 1rem rgba(0,0,0,.5)',
			backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,0) 0,transparent 55%,#000)',
			padding: '2rem',
			color: '#fff',
		};

		let image = null;

		if (imagePreview) {
			image = <img src={imagePreview} alt="" style={{ width: '100%', height: 'auto' }} />;
		}

		if (!attributes.showAsTeaser && attributes.align === 'wide') {
			styleCard.display = 'flex';
			styleCardImage.minHeight = '100%';
			styleCardImage.flex = '0 0 100%';
			styleCardImage.width = '100%';
			styleCardImage.borderRadius = '.25rem 0 0 .25rem';
		}

		useEffect(() => {
			if (!attributes.imageId) {
				setImagePreview(null);
				setImageSizes(null);

				return;
			}

			wp.data.subscribe(() => {
				const media = wp.data.select('core').getMedia(attributes.imageId);

				if (media) {
					setImageSizes(media.media_details.sizes);
				}
			});

			wp.data.select('core').getMedia(attributes.imageId);
		}, [attributes.imageId]);

		useEffect(() => {
			if (!imageSizes || !attributes.imageId) {
				return;
			}

			let size = attributes.imageSize;

			if (!size && attributes.showAsTeaser) {
				size = 'puff-teaser-image';
			} else if (!size && !attributes.showAsTeaser) {
				size = 'puff-image';
			}

			if (!(size in imageSizes)) {
				size = 'full';
			}

			setImagePreview(imageSizes[size].source_url);
		}, [imageSizes, attributes.imageSize, attributes.showAsTeaser, attributes.imageId]);

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title="Content">
						<TextControl
							label={__('Link', 'iis-blocks')}
							placeholder={__('/link/to/here', 'iis-blocks')}
							value={attributes.url}
							onChange={(url) => setAttributes({ url })}
						/>
						{attributes.url && attributes.url.length > 0 && (
							<CheckboxControl
								label="New window"
								checked={attributes.target === '_blank'}
								onChange={(value) => setAttributes({ target: (value) ? '_blank' : '_self' })}
							/>
						)}
					</PanelBody>
					<PanelBody title="Display">
						<CheckboxControl
							label="Background"
							checked={background}
							onChange={(value) => setAttributes({ background: value })}
						/>
						<CheckboxControl
							label="Show as teaser"
							checked={showAsTeaser}
							onChange={(value) => setAttributes({ showAsTeaser: value })}
						/>
						<CheckboxControl
							label="Shadow"
							checked={attributes.shadow}
							onChange={(shadow) => setAttributes({ shadow })}
						/>
						{attributes.align === 'right' && (
							<CheckboxControl
								label="Show on mobile"
								checked={attributes.showOnMobile}
								onChange={(showOnMobile) => setAttributes({ showOnMobile })}
							/>
						)}
					</PanelBody>
					<PanelBody title="Youtube">
						<TextControl
							label={__('Youtube-URL', 'iis-blocks')}
							placeholder={__('Full youtube URL', 'iis-blocks')}
							value={attributes.youtube}
							onChange={(youtube) => setAttributes({ youtube })}
						/>
					</PanelBody>
					<PanelBody title="Image">
						<div>{image}</div>
						{imagePreview === null && (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(imageObject) => (
										setAttributes({
											imageId: imageObject.id,
										})
									)}
									type="image"
									value={imagePreview}
									render={({ open }) => (
										<Button
											className="components-button editor-post-featured-image__toggle"
											onClick={open}
										>
											Upload Image!
										</Button>
									)}
								/>
							</MediaUploadCheck>
						)}
						{imagePreview !== null && (
							<Button
								className="components-button is-button is-default"
								onClick={() => setAttributes({ imageId: null })}
							>
								Remove image
							</Button>
						)}
					</PanelBody>
				</InspectorControls>
				<div style={styleCard}>
					{mediaPreview && (
						<div style={{ position: 'relative' }}>
							{youtubeUrl && (
								<div
									style={{
										position: 'absolute',
										top: '50%',
										left: '50%',
										transform: 'translate(-50%, -50%)',
									}}
								>
									<PlayIcon />
								</div>
							)}
							<img
								src={mediaPreview}
								alt=""
								style={(showAsTeaser) ? styleTeaserImage : styleCardImage}
							/>
						</div>
					)}
					<div
						style={(showAsTeaser && imagePreview) ? styleTeaserContent : styleCardContent}
					>
						<div>
							<RichText
								tagName="small"
								value={attributes.pretitle}
								placeholder={__('Title')}
								style={{ margin: 0, fontFamily: 'monospace' }}
								onChange={(pretitle) => setAttributes({ pretitle })}
							/>
							<RichText
								tagName="h1"
								value={attributes.title}
								placeholder={__('Title')}
								style={{ margin: 0 }}
								onChange={(title) => setAttributes({ title })}
							/>
							<InnerBlocks
								allowedBlocks={[
									'core/paragraph',
									'core/html',
									'core/columns',
									'core/list',
									'iis/button',
									'iis/buttons',
									'iis/icon',
								]}
								template={[['core/paragraph']]}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	},
	save() {
		return <InnerBlocks.Content />;
	},
});
