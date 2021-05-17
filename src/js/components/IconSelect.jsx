import icons from '@internetstiftelsen/styleguide/src/configurations/icons.json';
import './style.css';

const {
	Popover,
	Button,
} = wp.components;
const { withState } = wp.compose;

const imageUrls = icons.map((icon) => ({
	name: `https://styleguide.internetstiftelsen.se/components/raw/icon/${icon.id}.svg`,
	value: icon.id,
}));

const IconSelect = withState({
	isVisible: false,
})(({
	isVisible, setState, value, onChange, size,
}) => {
	const onSelect = (e) => {
		onChange(e.target.closest('button').value);
		setState({ isVisible: false });
	};
	const toggleVisible = () => {
		setState((state) => ({ isVisible: !state.isVisible }));
	};

	return (
		<div>
			{!value && (
				<Button isSecondary onClick={toggleVisible}>
					Select icon
				</Button>
			)}
			{value && (
				<div className="iis-icon-select__btn">
					<Button isLink onClick={toggleVisible}>
						<img height={size} width={size} src={`https://styleguide.internetstiftelsen.se/components/raw/icon/${value}.svg`} alt={value} />
					</Button>
				</div>
			)}
			{ isVisible && (
				<Popover onFocusOutside={() => toggleVisible()}>
					<div className="iis-icon-select">
						{imageUrls.map((icon) => (
							<button type="button" className={`iis-icon-select__icon ${(value === icon.value) ? 'is-selected' : ''}`} value={icon.value} onClick={onSelect}>
								<img src={icon.name} alt={icon.value} />
							</button>
						))}
					</div>
				</Popover>
			) }
		</div>
	);
});

export default IconSelect;
