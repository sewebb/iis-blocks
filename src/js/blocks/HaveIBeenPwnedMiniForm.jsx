const { __ } = wp.i18n;
const { Fragment, useEffect, useState } = wp.element;
const { registerBlockType } = wp.blocks;
const {
	Button,
	CheckboxControl,
	Notice,
	PanelBody,
	SelectControl,
	TextControl,
} = wp.components;
const {
	InnerBlocks,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
} = wp.editor;

registerBlockType('internetkunskap/have-i-been-pwned-mini-form', {
	title: __('Have I Been Pwned Mini Form', 'internetkunskap'),
	category: 'internetkunskap',
	icon: 'search',
	keywords: [
		__('pwned', 'internetkunskap'),
		__('breach', 'internetkunskap'),
		__('email', 'internetkunskap'),
	],
	supports: {
		align: ['right', 'wide'],
	},
	attributes: {
		background: {
			type: 'boolean',
			default: true,
		},
		showOnMobile: {
			type: 'boolean',
			default: false,
		},
		imageSize: {
			type: 'string',
			default: null,
		},
		imageId: {
			type: 'number',
			default: null,
		},
		figcaption: {
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
		align: {
			type: 'string',
			default: null,
		},
		shadow: {
			type: 'boolean',
			default: false,
		},
		targetUrl: {
			type: 'string',
			default: '',
		},
		openInNewTab: {
			type: 'boolean',
			default: false,
		},
	},
	getEditWrapperProps(attributes) {
		return attributes.align ? { 'data-align': attributes.align } : {};
	},

	edit({ attributes, setAttributes }) {
		const [imageSizes, setImageSizes] = useState(null);
		const [imagePreview, setImagePreview] = useState(null);
		const [imageSizeOptions, setImageSizeOptions] = useState([]);
		const allowedBlocks = [
			'core/paragraph',
			'core/html',
			'core/columns',
			'core/list',
			'iis/button',
			'iis/buttons',
			'iis/icon',
		];

		const cardStyle = {
			position: 'relative',
			border: attributes.background ? '1px dashed #bbb' : '1px dashed transparent',
			borderRadius: '.25rem',
			overflow: 'hidden',
		};

		if (attributes.shadow) {
			cardStyle.boxShadow = '0 4rem 6rem rgb(31 42 54 / 20%)';
		}

		const styleCardContent = {
			padding: attributes.background ? '1rem' : null,
		};

		const styleCardImage = {
			width: '100%',
			display: 'block',
			borderRadius: '.25rem .25rem 0 0',
		};

		const inputGroupStyle = {
			alignItems: 'stretch',
			display: 'flex',
			marginTop: '16px',
		};

		const labelStyle = {
			alignItems: 'center',
			backgroundColor: '#f1f1f1',
			border: '1px solid #d0d0d0',
			borderRight: 'none',
			display: 'flex',
			padding: '0 12px',
		};

		const inputStyle = {
			border: '1px solid #d0d0d0',
			flex: 1,
			padding: '12px 16px',
		};

		const buttonStyle = {
			background: '#2b7cff',
			border: 0,
			color: '#fff',
			padding: '12px 20px',
		};

		if (attributes.align === 'wide') {
			cardStyle.display = 'flex';
			styleCardImage.minHeight = '100%';
			styleCardImage.flex = '0 0 100%';
			styleCardImage.width = '100%';
			styleCardImage.borderRadius = '.25rem 0 0 .25rem';
		}

		useEffect(() => {
			wp.apiFetch({ path: '/iis-blocks/v1/image-sizes' })
				.then((items) => {
					const options = [{ value: '', label: __('Auto', 'internetkunskap') }];

					Object.values(items).forEach((item) => {
						options.push({
							value: item.size,
							label: `${item.name} (${item.width}x${item.height})`,
						});
					});

					setImageSizeOptions(options);
				})
				.catch(() => {
					setImageSizeOptions([{ value: '', label: __('Auto', 'internetkunskap') }]);
				});
		}, []);

		useEffect(() => {
			if (!attributes.imageId) {
				setImagePreview(null);
				setImageSizes(null);
				return;
			}

			const unsubscribe = wp.data.subscribe(() => {
				const media = wp.data.select('core').getMedia(attributes.imageId);

				if (media?.media_details?.sizes) {
					setImageSizes(media.media_details.sizes);
				}
			});

			wp.data.select('core').getMedia(attributes.imageId);

			return () => unsubscribe();
		}, [attributes.imageId]);

		useEffect(() => {
			if (!imageSizes || !attributes.imageId) {
				return;
			}

			let size = attributes.imageSize;

			if (!size) {
				size = 'puff-image';
			}

			if (!(size in imageSizes)) {
				size = 'full';
			}

			setImagePreview(imageSizes[size].source_url);
		}, [imageSizes, attributes.imageId, attributes.imageSize]);

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title="Target link">
						<TextControl
							label={__('Destination URL', 'internetkunskap')}
							help={__('URL that should receive the email and run the full Have I Been Pwned search.', 'internetkunskap')}
							placeholder={__('https://example.com/have-i-been-pwned', 'internetkunskap')}
							value={attributes.targetUrl || ''}
							onChange={(targetUrl) => setAttributes({ targetUrl })}
						/>
						<CheckboxControl
							label={__('Open in new tab', 'internetkunskap')}
							checked={!!attributes.openInNewTab}
							onChange={(openInNewTab) => setAttributes({ openInNewTab })}
						/>
					</PanelBody>
					<PanelBody title="Display">
						<CheckboxControl
							label="Background"
							checked={attributes.background}
							onChange={(background) => setAttributes({ background })}
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
						<SelectControl
							label={__('Image size', 'internetkunskap')}
							options={imageSizeOptions}
							value={attributes.imageSize || ''}
							onChange={(imageSize) => setAttributes({ imageSize: imageSize || null })}
						/>
					</PanelBody>
					<PanelBody title="Image caption">
						<TextControl
							label={__('Image description label', 'internetkunskap')}
							help={__('This replaces pre-title, title and content', 'internetkunskap')}
							placeholder={__('Image caption', 'internetkunskap')}
							value={attributes.figcaption || ''}
							onChange={(figcaption) => setAttributes({ figcaption: figcaption || null })}
						/>
					</PanelBody>
					<PanelBody title="Image">
						{imagePreview && (
							<img src={imagePreview} alt="" style={{ width: '100%', height: 'auto' }} />
						)}
						{!imagePreview && (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(imageObject) => setAttributes({ imageId: imageObject.id })}
									type="image"
									value={attributes.imageId}
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
						{imagePreview && (
							<Button
								className="components-button is-button is-default"
								onClick={() => setAttributes({ imageId: null, imageSize: null })}
							>
								Remove image
							</Button>
						)}
					</PanelBody>
				</InspectorControls>
				<div style={cardStyle}>
					{imagePreview && (
						<img
							src={imagePreview}
							alt=""
							style={styleCardImage}
						/>
					)}
					<div style={styleCardContent}>
						{!attributes.targetUrl && (
							<Notice status="warning" isDismissible={false}>
								{__('Add a destination URL in the block settings before publishing. Otherwise nothing will render on the frontend.', 'internetkunskap')}
							</Notice>
						)}
						{!attributes.figcaption && (
							<Fragment>
								<RichText
									tagName="small"
									value={attributes.pretitle}
									placeholder={__('Pretitle', 'internetkunskap')}
									style={{ display: 'block', fontFamily: 'monospace', margin: 0 }}
									onChange={(pretitle) => setAttributes({ pretitle })}
								/>
								<RichText
									tagName="h1"
									value={attributes.title}
									placeholder={__('Title', 'internetkunskap')}
									style={{ marginTop: '8px' }}
									onChange={(title) => setAttributes({ title })}
								/>
								<InnerBlocks
									allowedBlocks={allowedBlocks}
									template={[['core/paragraph']]}
								/>
							</Fragment>
						)}
						{attributes.figcaption && (
							<p>{attributes.figcaption}</p>
						)}
						<label style={{ display: 'block', marginTop: '16px' }}>
							<span className="u-visuallyhidden">{__('Ange din e-postadress', 'internetkunskap')}</span>
							<div style={inputGroupStyle}>
								<span style={labelStyle}>
									<svg className="icon" aria-hidden="true">
										<use xlinkHref="#icon-search" />
									</svg>
								</span>
								<input
									disabled
									placeholder={__('Ange din e-postadress', 'internetkunskap')}
									style={inputStyle}
									type="email"
								/>
								<button disabled style={buttonStyle} type="button">
									{__('Sök', 'internetkunskap')}
								</button>
							</div>
						</label>
					</div>
				</div>
			</Fragment>
		);
	},

	save() {
		return <InnerBlocks.Content />;
	},
});
