const { __ } = wp.i18n;
const { SelectControl, Notice, TextControl } = wp.components;
const { Component, Fragment } = wp.element;

export default class DataSelect extends Component {
	static getDerivedStateFromProps(props, state) {
		if (props.value !== state.value) {
			return {
				value: props.value,
			};
		}

		return null;
	}

	state = {
		loading: true,
		data: [],
		value: this.props.value,
		error: false,
		search: '',
	};

	searchThrottle = null;

	componentDidMount() {
		this.fetch();
	}

	fetch = () => {
		this.setState({ loading: true, error: false });

		let url = this.props.api;

		if (url.indexOf('?') > -1) {
			url += `&search=${this.state.search}`;
		} else {
			url += `?search=${this.state.search}`;
		}

		wp.apiFetch({ path: url })
			.then((json) => {
				if ('data' in json && 'status' in json.data && json.data.status > 299) {
					throw new Error(json.message);
				}

				return json;
			})
			.then((json) => {
				if (typeof json === 'object') {
					return Object.values(json);
				}

				return json;
			})
			.then(json => (
				json.map(type => ({
					value: this.props.value_key(type),
					label: this.props.label_key(type),
				}))
			))
			.then(items => this.setState({ items, loading: false }))
			.catch(error => this.setState({ error, loading: false }));
	};

	search = (value) => {
		this.setState({ search: value }, () => {
			clearTimeout(this.searchThrottle);

			this.searchThrottle = setTimeout(() => {
				this.fetch();
			}, 250);
		});
	};

	render() {
		if (this.state.loading && !this.props.search) {
			return <span className="components-spinner" style={{ float: 'none' }} />;
		}

		if (this.state.error) {
			const error = typeof this.state.error === 'object' ? this.state.error.message : this.state.error;

			return (
				<Notice status="error" actions={[{ label: __('Try again'), onClick: this.fetch }]}>
					<p>{error}</p>
				</Notice>
			);
		}

		return (
			<Fragment>
				{this.props.search && (
					<TextControl
						label={this.props.label}
						value={this.state.search}
						placeholder={__('Search')}
						onChange={this.search}
						disabled={this.props.disabled}
					/>
				)}

				{this.state.loading && (
					<p><span className="components-spinner" style={{ float: 'none' }} /></p>
				)}

				{!this.state.loading && this.state.items.length > 0 && (
					<SelectControl
						label={this.props.search ? null : this.props.label}
						help={this.props.help}
						options={ [...[this.props.placeholder], ...this.state.items] }
						value={ this.state.value }
						onChange={ (value) => {
							this.props.set(value);
							this.setState({ value });
						} }
						disabled={this.props.disabled}
					/>
				)}
			</Fragment>
		);
	}
}

DataSelect.defaultProps = {
	set: () => {},
};
