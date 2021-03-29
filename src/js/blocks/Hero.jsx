import './hero.css';

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const { PanelBody, Button, TextControl } = wp.components;
const {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	InnerBlocks,
} = wp.editor;

function parseYoutube(url) {
	if (!url) {
		return null;
	}

	const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
	const match = url.match(regExp);
	return (match && match[7].length === 11) ? match[7] : false;
}

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
		youtube: {
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
		const noYoutube = attributes.youtube === null || attributes.youtube.length < 1;
		const youtubeId = parseYoutube(attributes.youtube);
		const youtubeUrl = (youtubeId) ? `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0` : null;

		if (attributes.mediaUrl && attributes.mediaType === 'video') {
			// eslint-disable-next-line jsx-a11y/media-has-caption
			image = <video src={attributes.mediaUrl} style={{ width: '100%', height: 'auto' }} />;
		} else if (attributes.mediaUrl) {
			image = <img src={attributes.mediaUrl} alt="" style={{ width: '100%', height: 'auto' }} />;
		} else if (youtubeId) {
			// eslint-disable-next-line jsx-a11y/iframe-has-title
			image = <iframe width="100%" height="100%" src={youtubeUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />;
		}

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title="Background image">
						<p>{image}</p>
						{attributes.mediaUrl === null && noYoutube && (
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
						{attributes.mediaUrl !== null && noYoutube && (
							<Button
								className="components-button is-button is-default"
								onClick={() => setAttributes({ mediaUrl: null, mediaId: null })}
							>
								Remove background
							</Button>
						)}
						{!attributes.mediaUrl && (
							<div style={{ marginTop: '1rem' }}>
								<TextControl
									label={__('Youtube-URL', 'iis-blocks')}
									placeholder={__('Full youtube URL', 'iis-blocks')}
									value={attributes.youtube}
									onChange={(youtube) => setAttributes({ youtube })}
								/>
							</div>
						)}
					</PanelBody>
				</InspectorControls>
				<div className={`iis-block-hero ${!attributes.mediaId && !attributes.youtube ? 'iis-block-hero--no-image' : null} ${attributes.youtube ? 'iis-block-hero--video' : null}`}>
					{attributes.mediaUrl && attributes.mediaType === 'video' && (
						// eslint-disable-next-line jsx-a11y/alt-text,jsx-a11y/media-has-caption
						<video src={attributes.mediaUrl} autoPlay loop controls muted className="iis-block-hero__image" />
					)}
					{attributes.mediaUrl && attributes.mediaType !== 'video' && (
						// eslint-disable-next-line jsx-a11y/alt-text
						<img src={attributes.mediaUrl} className="iis-block-hero__image" />
					)}
					{!attributes.mediaUrl && youtubeUrl && (
						// eslint-disable-next-line jsx-a11y/iframe-has-title
						<iframe width="100%" height="100%" src={youtubeUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
					)}
					{attributes.mediaType !== 'video' && !attributes.youtube && (
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
