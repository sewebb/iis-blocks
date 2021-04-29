import DataSelect from '../components/DataSelect';

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
			styleCardImage.maxWidth = '50%';
			styleCardImage.height = '100%';
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
					{imagePreview && (
						<img
							src={imagePreview}
							alt=""
							style={(showAsTeaser) ? styleTeaserImage : styleCardImage}
						/>
					)}
					<div
						style={(showAsTeaser && imagePreview) ? styleTeaserContent : styleCardContent}
					>
						<div>
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
