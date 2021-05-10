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
} = wp.editor;

registerBlockType('iis/testimonial', {
	title: __('Testimonial'),
	category: 'iis',
	icon: 'format-quote',
	keywords: [__('testimonial'), __('quote')],
	attributes: {
		photoUrl: {
			type: 'string',
			default: null,
		},
		photoId: {
			type: 'number',
			default: null,
		},
		quote: {
			type: 'string',
			default: '',
		},
		name: {
			type: 'string',
			default: '',
		},
	},
	edit({ attributes, setAttributes }) {
		let image = null;
		const displayImage = attributes.photoUrl !== null;

		if (displayImage) {
			image = <img src={attributes.photoUrl} alt="" style={{ width: '100%', height: 'auto' }} />;
		}

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title="Photo">
						<p>{image}</p>
						{attributes.photoUrl === null && (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(imageObject) => {
										setAttributes({
											photoUrl: ('sizes' in imageObject) ? imageObject.sizes.thumbnail.url : imageObject.url,
											photoId: imageObject.id,
										});
									}}
									type="image"
									value={attributes.photoUrl}
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
						{attributes.photoUrl !== null && (
							<Button
								className="components-button is-button is-default"
								onClick={() => setAttributes({ photoUrl: null, photoId: null })}
							>
								Remove background
							</Button>
						)}
					</PanelBody>
				</InspectorControls>
				<div className="iis-block-testimonial">
					<blockquote className="wp-block-quote">
						<RichText
							tagName="div"
							value={attributes.quote}
							placeholder={__('Quote')}
							onChange={(quote) => setAttributes({ quote })}
						/>
						<div style={{ display: 'flex', alignItems: 'center', marginTop: '1em' }}>
							{displayImage && (
								<img src={attributes.photoUrl} width={25} height={25} style={{ borderRadius: '50%', height: '25px', marginRight: '10px' }} alt="" />
							)}
							<RichText
								tagName="cite"
								value={attributes.name}
								placeholder={__('Name')}
								onChange={(name) => setAttributes({ name })}
								style={{ marginTop: 0 }}
							/>
						</div>
					</blockquote>
				</div>
			</Fragment>
		);
	},
	save() {
		return null;
	},
});
