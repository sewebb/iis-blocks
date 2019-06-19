const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Component } = wp.element;
const {
	RichText,
	InspectorControls,
} = wp.editor;
const { PanelBody, SelectControl } = wp.components;

class MailchimpLists extends Component {
	static defaultProps = {
		setListId: () => {},
	};

	state = {
		loading: true,
		lists: [],
		error: false,
	};

	componentDidMount() {
		this.fetchLists();
	}

	fetchLists = async () => {
		try {
			const lists = (await wp.apiFetch({ path: '/iis-blocks/v1/mailchimp-lists', method: 'GET' })).map(list => ({
				label: list.name,
				value: list.id,
			}));

			this.setState({
				lists,
				loading: false,
			});
		} catch (error) {
			this.setState({ loading: false, error: error.message });
		}
	};

	render() {
		if (this.state.loading) {
			return <span className="components-spinner" style={{ float: 'none' }} />;
		}

		if (this.state.error) {
			return <span style={{ color: '#d94f4f' }}>{this.state.error}</span>;
		}

		return (
			<SelectControl
				value={ this.props.list_id }
				options={ this.state.lists }
				onChange={ listId => this.props.setListId(listId) }
			/>
		);
	}
}

registerBlockType('iis/newsletter', {
	title: __('Newsletter'),
	category: 'iis',
	icon: 'email',
	keywords: [__('newsletter'), __('mailchimp'), __('email')],
	attributes: {
		title: {
			type: 'string',
			default: '',
		},
		content: {
			type: 'string',
			default: '',
		},
		termsText: {
			type: 'string',
			default: '',
		},
		buttonText: {
			type: 'string',
			default: '',
		},
		listId: {
			type: 'string',
			default: '',
		},
	},
	edit({ attributes, setAttributes }) {
		return (
			<div>
				<InspectorControls>
					<PanelBody title="Mailchimp list">
						<MailchimpLists setListId={ listId => setAttributes({ listId }) } />
					</PanelBody>
				</InspectorControls>
				<RichText
					identifier="content"
					wrapperClassName="wp-block-heading"
					tagName="h3"
					value={ attributes.title }
					onChange={ value => setAttributes({ title: value }) }
					placeholder={__('Title')}
				/>
				<RichText
					identifier="content"
					wrapperClassName="wp-block-paragraph"
					tagName="p"
					value={ attributes.content }
					onChange={ value => setAttributes({ content: value }) }
					placeholder={__('Description')}
				/>
				<p>&laquo; Newsletter form &raquo;</p>
				<RichText
					identifier="content"
					wrapperClassName="wp-block-paragraph"
					tagName="p"
					style={{ fontSize: 'small' }}
					value={ attributes.termsText }
					onChange={ value => setAttributes({ termsText: value }) }
					placeholder={__('Terms text')}
				/>
				<div className="components-button is-button is-default is-primary">
					<RichText
						identifier="content"
						tagName="span"
						formattingControls={ ['bold', 'italic', 'strikethrough'] }
						value={ attributes.buttonText }
						onChange={ value => setAttributes({ buttonText: value }) }
						placeholder={__('Button text')}
					/>
				</div>
			</div>
		);
	},
	save() {
		return null;
	},
});
