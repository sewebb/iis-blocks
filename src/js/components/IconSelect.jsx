import './style.css';

const { Popover, Button } = wp.components;
const { withState } = wp.compose;
const { useState, useEffect } = wp.element;

/**
 * Load external SVG sprite once per page.
 */
let spriteLoaded = false;

function loadSprite() {
	if (spriteLoaded || typeof window === 'undefined') return;
	spriteLoaded = true;

	fetch('https://static.internetstiftelsen.se/icons/sprite.svg')
		.then((res) => res.text())
		.then((svg) => {
			const wrapper = document.createElement('div');
			wrapper.style.display = 'none';
			wrapper.innerHTML = svg; // contains <svg><symbol>…</symbol></svg>
			document.body.insertBefore(wrapper, document.body.firstChild);
		})
		.catch((err) => console.error('Failed to load icon sprite', err));
}

const IconSelectBase = ({
	isVisible,
	setState,
	value,
	onChange,
	size,
	color,
}) => {
	const [icons, setIcons] = useState([]);

	useEffect(() => {
		// Fetch icon metadata
		fetch('https://static.internetstiftelsen.se/icons/icons.json')
			.then((res) => res.json())
			.then((data) => setIcons(data))
			.catch((err) => console.error('Failed to load icons.json', err));

		// Load SVG sprite
		loadSprite();
	}, []);

	const onSelect = (e) => {
		onChange(e.target.closest('button').value);
		setState({ isVisible: false });
	};

	const toggleVisible = () => {
		setState((state) => ({ isVisible: !state.isVisible }));
	};

	return (
		<>
			<div>
				{!value && (
					<Button isSecondary onClick={toggleVisible}>
						Select icon
					</Button>
				)}

				{value && (
					<div className="iis-icon-select__btn">
						<Button isLink onClick={toggleVisible}>
							<svg
								className="icon u-icon"
								style={{ width: size, height: size, color }}
							>
								<use xlinkHref={`#icon-${value}`} />
							</svg>
						</Button>
					</div>
				)}

				{isVisible && (
					<Popover onFocusOutside={toggleVisible}>
						<div className="iis-icon-select">
							{icons.map((icon) => (
								<button
									key={icon.id}
									type="button"
									className={`iis-icon-select__icon ${
										value === icon.id ? 'is-selected' : ''
									}`}
									value={icon.id}
									onClick={onSelect}
								>
									<svg className="icon u-icon">
										<use xlinkHref={`#icon-${icon.id}`} />
									</svg>
								</button>
							))}
						</div>
					</Popover>
				)}
			</div>
		</>
	);
};

const IconSelect = withState({ isVisible: false })(IconSelectBase);

export default IconSelect;
