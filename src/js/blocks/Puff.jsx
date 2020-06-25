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
	RichText,
} = wp.editor;

registerBlockType('iis/puff', {
	title: __('Post puff', 'iis'),
	category: 'iis',
	icon: 'format-aside',
	keywords: [
		__('card', 'iis'),
		__('teaser', 'iis'),
		__('puff', 'iis'),
	],
	supports: {
		align: ['right', 'wide'],
	},
	attributes: {
		custom: {
			type: 'boolean',
			default: false,
		},
		postId: {
			type: 'string',
			default: null,
		},
		postPreview: {
			type: 'object',
			default: {},
		},
		showAsTeaser: {
			type: 'boolean',
			default: false,
		},
		showOnMobile: {
			type: 'boolean',
			default: false,
		},
		displayTags: {
			type: 'boolean',
			default: false,
		},
		displayExcerpt: {
			type: 'boolean',
			default: true,
		},
		imageSize: {
			type: 'string',
			default: null,
		},
		imageId: {
			type: 'number',
			default: null,
		},
		title: {
			type: 'string',
			default: '',
		},
		text: {
			type: 'string',
			default: '',
		},
		url: {
			type: 'string',
			default: null,
		},
		align: {
			type: 'string',
			default: null,
		},
	},
	edit({ attributes, setAttributes }) {
		const [imageSizes, setImageSizes] = useState(null);
		const [imagePreview, setImagePreview] = useState(null);
		const {
			showAsTeaser,
			custom,
		} = attributes;
		const styleCard = {
			position: 'relative',
			border: '1px solid #bbb',
			borderRadius: '.25rem',
			overflow: 'hidden',
		};

		const styleCardContent = {
			padding: '1rem',
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
						<CheckboxControl
							label="Custom content"
							checked={custom}
							onChange={(value) => setAttributes({ custom: value })}
						/>
						{custom && (
							<TextControl
								label={__('Link', 'iis')}
								placeholder={__('/link/to/here', 'iis')}
								value={attributes.url}
								onChange={(url) => setAttributes({ url })}
							/>
						)}
					</PanelBody>
					<PanelBody title="Display">
						<CheckboxControl
							label="Show as teaser"
							checked={showAsTeaser}
							onChange={(value) => setAttributes({ showAsTeaser: value })}
						/>
						{attributes.align === 'right' && (
							<CheckboxControl
								label="Show on mobile"
								checked={attributes.showOnMobile}
								onChange={(showOnMobile) => setAttributes({ showOnMobile })}
							/>
						)}
						{!custom && (
							<Fragment>
								<CheckboxControl
									label={__('Display tags/categories', 'iis')}
									checked={attributes.displayTags}
									onChange={(displayTags) => setAttributes({ displayTags })}
								/>
								<CheckboxControl
									label="Display excerpt"
									checked={attributes.displayExcerpt}
									onChange={(displayExcerpt) => setAttributes({ displayExcerpt })}
								/>
							</Fragment>
						)}
						{custom && (
							<DataSelect
								label={__('Image size', 'iis')}
								placeholder={{ value: '', label: __('Auto', 'iis') }}
								api="/iis-blocks/v1/image-sizes"
								value_key={(obj) => obj.size}
								label_key={(obj) => `${obj.name} (${obj.width}x${obj.height}`}
								value={attributes.imageSize}
								set={(imageSize) => setAttributes({ imageSize })}
							/>
						)}
					</PanelBody>
					{attributes.custom && (
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
					)}
				</InspectorControls>
				<div style={styleCard}>
					{custom && imagePreview && (
						<img
							src={imagePreview}
							alt=""
							style={(showAsTeaser) ? styleTeaserImage : styleCardImage}
						/>
					)}
					<div
						style={(showAsTeaser && custom && imagePreview) ? styleTeaserContent : styleCardContent}
					>
						{!custom && (
							<DataSelect
								label={__('Select post', 'iis')}
								placeholder={{ value: null, label: __('Choose a post', 'iis') }}
								api={`/iis-blocks/v1/puff-posts?include=${attributes.postId}`}
								value_key={(obj) => obj.ID}
								label_key={(obj) => obj.post_title}
								value={attributes.postId}
								set={(postId) => setAttributes({ postId })}
								search
							/>
						)}
						{custom && (
							<div>
								<RichText
									tagName="h1"
									value={attributes.title}
									placeholder={__('Title')}
									style={{ margin: 0 }}
									onChange={(title) => setAttributes({ title })}
								/>
								<RichText
									tagName="div"
									value={attributes.text}
									placeholder={__('Content')}
									onChange={(text) => setAttributes({ text })}
								/>
							</div>
						)}
					</div>
				</div>
			</Fragment>
		);
	},
	save() {
		return null;
	},
});
