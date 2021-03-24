import './hero.css';

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const { PanelBody, Button } = wp.components;
const {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	InnerBlocks,
} = wp.editor;

registerBlockType('iis/hero', {
	title: __('Hero'),
	category: 'iis',
	icon: 'megaphone',
	keywords: [__('hero'), __('title')],
	supports: {
		align: ['full', 'wide'],
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
		mediaType: {
			type: 'string',
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
		align: {
			type: 'string',
			default: 'wide',
		},
	},
	edit({ attributes, setAttributes }) {
		let image = null;

		if (attributes.mediaUrl && attributes.mediaType === 'video') {
			// eslint-disable-next-line jsx-a11y/media-has-caption
			image = <video src={attributes.mediaUrl} style={{ width: '100%', height: 'auto' }} />;
		} else if (attributes.mediaUrl) {
			image = <img src={attributes.mediaUrl} alt="" style={{ width: '100%', height: 'auto' }} />;
		}

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title="Background image">
						<p>{image}</p>
						{attributes.mediaUrl === null && (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(imageObject) => {
										console.log(imageObject);

										setAttributes({
											mediaUrl: ('sizes' in imageObject) ? imageObject.sizes.full.url : imageObject.url,
											mediaId: imageObject.id,
											mediaType: imageObject.mime.split('/')[0],
										});
									}}
									type="image"
									value={attributes.mediaUrl}
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
						{attributes.mediaUrl !== null && (
							<Button
								className="components-button is-button is-default"
								onClick={() => setAttributes({ mediaUrl: null, mediaId: null })}
							>
								Remove background
							</Button>
						)}
					</PanelBody>
				</InspectorControls>
				<div className={`iis-block-hero ${!attributes.mediaId ? 'iis-block-hero--no-image' : null}`}>
					{attributes.mediaUrl && attributes.mediaType === 'video' && (
						// eslint-disable-next-line jsx-a11y/alt-text,jsx-a11y/media-has-caption
						<video src={attributes.mediaUrl} autoPlay loop controls muted className="iis-block-hero__image" />
					)}
					{attributes.mediaUrl && attributes.mediaType !== 'video' && (
						// eslint-disable-next-line jsx-a11y/alt-text
						<img src={attributes.mediaUrl} className="iis-block-hero__image" />
					)}
					{attributes.mediaType !== 'video' && (
						<div className="iis-block-hero__content">
							<div className="iis-block-hero__inner-content">
								<RichText
									tagName="h1"
									value={attributes.title}
									placeholder={__('Title')}
									onChange={(title) => setAttributes({ title })}
								/>
								<RichText
									tagName="p"
									value={attributes.introText}
									placeholder={__('Content')}
									onChange={(introText) => setAttributes({ introText })}
								/>
								<div className="iis-block-hero__buttons">
									<InnerBlocks allowedBlocks={['iis/button']} />
								</div>
							</div>
						</div>
					)}
				</div>
			</Fragment>
		);
	},
	save() {
		return <InnerBlocks.Content />;
	},
});
