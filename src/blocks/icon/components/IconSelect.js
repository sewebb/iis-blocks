import './icon-select.css';

import { Popover, Button } from '@wordpress/components';
import { useRefEffect } from '@wordpress/compose';
import { useState, useEffect } from '@wordpress/element';

/**
 * Load the SVG sprite in each document used by the editor and its popovers.
 */
const spriteDocuments = new WeakSet();

function loadSprite(element) {
	const { ownerDocument } = element;
	if (spriteDocuments.has(ownerDocument)) return;
	spriteDocuments.add(ownerDocument);

	fetch('https://static.internetstiftelsen.se/icons/sprite.svg')
		.then((res) => res.text())
		.then((svg) => {
			const wrapper = ownerDocument.createElement('div');
			wrapper.style.display = 'none';
			wrapper.innerHTML = svg; // contains <svg><symbol>…</symbol></svg>
			ownerDocument.body.prepend(wrapper);
		})
		.catch((err) => {
			spriteDocuments.delete(ownerDocument);
			console.error('Failed to load icon sprite', err);
		});
}

const IconSelect = ({
	value,
	onChange,
	size,
	color,
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const [icons, setIcons] = useState([]);
	const iconRef = useRefEffect(loadSprite, []);
	const popoverRef = useRefEffect(loadSprite, []);

	useEffect(() => {
		// Fetch icon metadata
		fetch('https://static.internetstiftelsen.se/icons/icons.json')
			.then((res) => res.json())
			.then((data) => setIcons(data))
			.catch((err) => console.error('Failed to load icons.json', err));
	}, []);

	const onSelect = (e) => {
		onChange(e.target.closest('button').value);
		setIsVisible(false);
	};

	const toggleVisible = () => {
		setIsVisible((visible) => !visible);
	};

	return (
		<>
			<div ref={iconRef}>
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
						<div ref={popoverRef} className="iis-icon-select">
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

export default IconSelect;
