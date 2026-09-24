import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import {
	InspectorControls,
	PanelColorSettings,
	InnerBlocks,
	withColors,
	useBlockProps,
} from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import metadata from './block.json';

registerBlockType(metadata, {
	edit: withColors({ backgroundColor: 'background' })(({
		attributes,
		setAttributes,
		backgroundColor,
		setBackgroundColor,
	}) => {
		return (
			<div {...useBlockProps()}>
				<InspectorControls>
					<PanelColorSettings
						title={__('Color settings', 'iis/blocks')}
						colorSettings={[
							{
								colors: [
									{
										name: __('Snow'),
										slug: 'snow',
										color: '#ffffff',
									},
								],
								value: backgroundColor.color,
								onChange: setBackgroundColor,
								label: __('Background Color', 'iis/blocks'),
							},
						]}
					/>
				</InspectorControls>
				<div style={{ background: '#ededed', padding: '20px' }}>
					<TextControl type="number" label={__('Height')} value={attributes.height} onChange={(height) => setAttributes({ height })} />

					<TextControl type="text" label={__('Maximize text')} value={attributes.maximize_text} onChange={(maximize_text) => setAttributes({ maximize_text: maximize_text })}/>

					<TextControl type="text" label={__('Minimize text')} value={attributes.minimize_text} onChange={(minimize_text) => setAttributes({ minimize_text: minimize_text })}/>
				</div>
				<div style={{ border: '1px solid #d8d8d8', padding: '20px' }}>
					<InnerBlocks />
				</div>
			</div>
		);
	}),
	save() {
		return <InnerBlocks.Content />;
	},
});
