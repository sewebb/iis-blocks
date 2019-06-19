import DataSelect from '../components/DataSelect';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	InspectorControls,
} = wp.editor;
const { PanelBody } = wp.components;

registerBlockType('iis/postarchive', {
	title: __('Post Archive', 'iis'),
	category: 'iis',
	icon: 'media-archive',
	keywords: [__('archive', 'iis')],
	attributes: {
		postType: {
			type: 'string',
			default: false,
		},
	},

	edit({ attributes, setAttributes }) {
		return (
			<div>
				<div>
					<strong>&laquo; Post Archive &raquo;</strong>
				</div>
				<InspectorControls>
					<PanelBody>
						<DataSelect
							label={ __('Select post type', 'iis') }
							placeholder={{ value: null, label: __('Post type', 'iis') }}
							api="/wp-json/wp/v2/types"
							value_key={ obj => obj.slug }
							label_key={ obj => obj.name }
							value={attributes.postType}
							set={ postType => setAttributes({ postType }) }
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
