import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	Button,
} from '@wordpress/components';
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	withColors,
	PanelColorSettings,
	useBlockProps,
} from '@wordpress/block-editor';

export default withColors({ linkColor: 'color' })(({
	attributes, setAttributes, linkColor, setLinkColor,
}) => {
	const image = <img src={attributes.mediaUrl} alt="" style={{ width: '100%', height: 'auto' }} />;

	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelColorSettings
					title={__('Color Settings')}
					colorSettings={[
						{
							value: linkColor.color,
							onChange: setLinkColor,
							label: __('Link Color'),
						},
					]}
				/>
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
						<img src={attributes.mediaUrl} className="iis-block-hero__image" />
					)}
					<div className="iis-block-hero__content">
						<div className="iis-block-hero__inner-content">
							<RichText
								tagName="h1"
								wrapperClassName={linkColor.slug}
								value={attributes.title}
								placeholder={__('Title')}
								onChange={(title) => setAttributes({ title })}
								style={{ marginTop: 0 }}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});
