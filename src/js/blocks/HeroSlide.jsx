const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const {
	PanelBody,
	Button,
} = wp.components;
const {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
} = wp.editor;

registerBlockType('iis/hero-slide', {
	title: __('Slide'),
	category: 'iis',
	icon: 'megaphone',
	keywords: [__('slide', 'iis-blocks'), __('slider', 'iis-blocks'), __('glider', 'iis-blocks')],
	parent: ['iis/glider-hero'],
	getEditWrapperProps() {
		return { 'data-align': 'full' };
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
	},
	edit({ attributes, setAttributes }) {
		const image = <img src={attributes.mediaUrl} alt="" style={{ width: '100%', height: 'auto' }} />;

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
				<span
					style={{
						display: 'block',
						textAlign: 'center',
						color: '#757575',
						textTransform: 'uppercase',
						fontSize: '13px',
					}}
				>
					Glider hero slide
				</span>
				<div style={{ borderTop: '4px solid #757575', paddingTop: '10px' }}>
					<div className={`iis-block-hero ${(attributes.mediaUrl === null) ? 'iis-block-hero--no-image' : ''}`}>
						{attributes.mediaUrl !== null && (
							// eslint-disable-next-line jsx-a11y/alt-text
							<img src={attributes.mediaUrl} className="iis-block-hero__image" />
						)}
						<div className="iis-block-hero__content">
							<div className="iis-block-hero__inner-content">
								<RichText
									tagName="h1"
									value={attributes.title}
									placeholder={__('Title')}
									onChange={(title) => setAttributes({ title })}
									style={{ marginTop: 0 }}
								/>
							</div>
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
