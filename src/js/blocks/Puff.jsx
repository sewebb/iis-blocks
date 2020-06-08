const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { useEffect, useState } = wp.element;
const { registerBlockType } = wp.blocks;
const {
	SelectControl,
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
		imagePreviewUrl: {
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
		const [posts, setPosts] = useState([]);
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

		if (attributes.imagePreviewUrl) {
			image = <img src={attributes.imagePreviewUrl} alt="" style={{ width: '100%', height: 'auto' }} />;
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
			wp.apiFetch({ path: '/wp/v2/posts?parent=0&per_page=-1' }).then((fetchedPosts) => {
				// Make posts in options format.
				const postOptions = fetchedPosts.map((post) => ({
					label: post.title.rendered,
					value: post.id,
				}));

				setPosts(postOptions);
			});
		}, []);

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
					</PanelBody>
					{attributes.custom && (
						<PanelBody title="Image">
							<div>{image}</div>
							{attributes.imagePreviewUrl === null && (
								<MediaUploadCheck>
									<MediaUpload
										onSelect={(imageObject) => (
											setAttributes({
												imagePreviewUrl: imageObject.sizes.full.url,
												imageId: imageObject.id,
											})
										)}
										type="image"
										value={attributes.imagePreviewUrl}
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
							{attributes.imagePreviewUrl !== null && (
								<Button
									className="components-button is-button is-default"
									onClick={() => setAttributes({ imagePreviewUrl: null, imageId: null })}
								>
									Remove image
								</Button>
							)}
						</PanelBody>
					)}
				</InspectorControls>
				<div style={styleCard}>
					{custom && attributes.imagePreviewUrl && (
						<img
							src={attributes.imagePreviewUrl}
							alt=""
							style={(showAsTeaser) ? styleTeaserImage : styleCardImage}
						/>
					)}
					<div
						style={(showAsTeaser && custom) ? styleTeaserContent : styleCardContent}
					>
						{!custom && (
							<SelectControl
								label={__('Post', 'iis')}
								onChange={(postId) => setAttributes({ postId })}
								options={posts.length ? (
									[
										{
											label: __('Choose a post', 'internetkunskap'),
											value: null,
										},
										...posts,
									]
								) : [
									{
										label: __('Loading posts...', 'internetkunskap'),
										value: '',
										disabled: true,
									},
								]}
								value={attributes.postId}
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
