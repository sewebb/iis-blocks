import DataSelect from '../components/DataSelect';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment, useState } = wp.element;
const {
	InspectorControls,
} = wp.editor;
const { PanelBody, ToggleControl, TextControl } = wp.components;

registerBlockType('iis/news', {
	title: __('News', 'iis-blocks'),
	category: 'iis',
	icon: 'edit-large',
	keywords: [__('news', 'iis-blocks')],
	attributes: {
		postType: {
			type: 'string',
			default: 'post',
		},
		category: {
			type: 'string',
			default: null,
		},
		pinned: {
			type: 'number',
			default: null,
		},
		limit: {
			type: 'number',
			default: 4,
		},
		firstWide: {
			type: 'boolean',
			default: true,
		},
		displayDates: {
			type: 'boolean',
			default: false,
		},
		displayTags: {
			type: 'boolean',
			default: false,
		},
	},

	edit({ attributes, setAttributes }) {
		const [items, setItems] = useState(null);

		return (
			<Fragment>
				<div>
					<img alt="" src="data:image/png;base64,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" />
				</div>
				<InspectorControls>
					<PanelBody>
						<DataSelect
							label={__('Select post type', 'iis-blocks')}
							placeholder={{ value: '', label: __('Post type', 'iis-blocks') }}
							api="/wp/v2/types"
							value_key={(obj) => obj.slug}
							label_key={(obj) => obj.name}
							value={attributes.postType}
							set={(postType) => setAttributes({ postType, pinned: null })}
							onItems={setItems}
						/>
						{attributes.postType === 'post' && (
							<DataSelect
								label={__('Select category', 'iis-blocks')}
								placeholder={{ value: '', label: __('All categories', 'iis-blocks') }}
								api="/wp/v2/categories"
								value_key={(obj) => obj.slug}
								label_key={(obj) => obj.name}
								value={attributes.category}
								set={(category) => setAttributes({ category })}
							/>
						)}
						{items && items.length > 0 && (
							<DataSelect
								label={__('Pinned post', 'iis-blocks')}
								placeholder={{ value: '', label: __('No pinned post', 'iis-blocks') }}
								api={items.find((i) => i.value === attributes.postType).link.split('/wp-json').pop()}
								value_key={(obj) => obj.id}
								label_key={(obj) => obj.title.rendered}
								value={attributes.pinned}
								set={(pinned) => setAttributes({ pinned: parseInt(pinned, 10) })}
								key={attributes.postType}
							/>
						)}
						<ToggleControl
							label="First wide"
							checked={attributes.firstWide}
							onChange={(firstWide) => setAttributes({ firstWide })}
						/>
						<ToggleControl
							label="Display dates"
							checked={attributes.displayDates}
							onChange={(displayDates) => setAttributes({ displayDates })}
						/>
						<ToggleControl
							label="Display tags"
							checked={attributes.displayTags}
							onChange={(displayTags) => setAttributes({ displayTags })}
						/>
						<TextControl
							label={__('Limit')}
							value={attributes.limit}
							type="number"
							onChange={(limit) => setAttributes({ limit })}
						/>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	},

	save() {
		return null;
	},
});
