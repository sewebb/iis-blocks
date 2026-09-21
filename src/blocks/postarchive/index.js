import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import metadata from './block.json';
import DataSelect from '../../components/DataSelect';


registerBlockType(metadata, {
	edit({ attributes, setAttributes }) {
		return (
			<div {...useBlockProps()}>
				<div>
					<strong>&laquo; Post Archive &raquo;</strong>
				</div>
				<InspectorControls>
					<PanelBody>
						<DataSelect
							label={__('Select post type', 'iis-blocks')}
							placeholder={{ value: null, label: __('Post type', 'iis-blocks') }}
							api="/wp/v2/types"
							value_key={(obj) => obj.slug}
							label_key={(obj) => obj.name}
							value={attributes.postType}
							set={(postType) => setAttributes({ postType })}
						/>
					</PanelBody>
				</InspectorControls>
			</div>
		);
	},

	save() {
		return null;
	},
});
