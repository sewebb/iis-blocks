const { __ } = wp.i18n;
const { useEffect, useState } = wp.element;
const { registerBlockType } = wp.blocks;
const { SelectControl, CheckboxControl } = wp.components;

registerBlockType('iis/puff', {
	title: __('Post puff', 'iis'),
	category: 'iis',
	icon: 'format-aside',
	keywords: [
		__('card', 'iis'),
		__('teaser', 'iis'),
		__('puff', 'iis'),
	],
	supports: {
		align: ['right'],
	},
	attributes: {
		postId: {
			type: 'string',
			default: null,
		},
		showAsTeaser: {
			type: 'boolean',
			default: false
		},
	},
	edit({ attributes, setAttributes }) {
		const [posts, setPosts] = useState([]);
		const containerStyles = {
			border: '1px dotted #bbb',
			padding: '1rem',
		};

		useEffect(() => {
			wp.apiFetch({ path: '/wp/v2/posts?parent=0&per_page=-1' }).then((posts) => {
				// Make posts in options format.
				const postOptions = posts.map((post) => ({
					label: post.title.rendered,
					value: post.id,
				}));

				setPosts(postOptions);
			});
		}, []);

		return (
			<div style={containerStyles}>
				<fieldset>
					<legend>{__('Post puff', 'iis')}</legend>

					<SelectControl
						label={__('Post', 'iis')}
						onChange={(postId) => setAttributes({ postId })}
						options={posts.length ? (
							[
								{
									label: __('Choose a post', 'iis'),
									value: null,
								},
								...posts,
							]
						) : [
							{
								label: __('Loading posts...', 'iis'),
								value: '',
								disabled: true,
							},
						]}
						value={attributes.postId}
					/>
					<CheckboxControl
						label="Show as teaser"
						checked={attributes.showAsTeaser}
						onChange={(showAsTeaser) => setAttributes({ showAsTeaser })}
					/>
				</fieldset>
			</div>
		);
	},
	save() {
		return null;
	},
});
