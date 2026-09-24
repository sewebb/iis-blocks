import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';
import { TextControl, PanelBody } from '@wordpress/components';
import {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';
import metadata from './block.json';
import '../grid/editor.css';

registerBlockType(metadata, {
	getEditWrapperProps() {
		return { 'data-align': 'full' };
	},
	edit({ attributes, setAttributes }) {
		const blockProps = useBlockProps({
			style: { background: '#eee', padding: '20px 0 0', borderBottom: '4px solid #757575' },
		});

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody>
						<TextControl
							label={__('Auto scroll', 'iis-blocks')}
							placeholder={__('Time until next slide in milliseconds', 'iis-blocks')}
							value={attributes.autoScrollTime}
							type="number"
							onChange={(v) => setAttributes({ autoScrollTime: parseInt(v, 10) })}
						/>
					</PanelBody>
				</InspectorControls>
				<div {...blockProps}>
					<InnerBlocks
						allowedBlocks={['iis/hero-hero-slide']}
						template={[
							['iis/hero-slide'],
							['iis/hero-slide'],
						]}
						orientation="vertical"
					/>
				</div>
			</Fragment>
		);
	},
	save() {
		return <InnerBlocks.Content />;
	},
});
