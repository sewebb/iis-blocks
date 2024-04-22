import icons from '@internetstiftelsen/styleguide/src/configurations/icons.json';
import './style.css';

const {
	Popover,
	Button,
} = wp.components;
const { withState } = wp.compose;

const IconSelect = withState({
	isVisible: false,
})(({
	isVisible,
	setState,
	value,
	onChange,
	size,
	color,
}) => {
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
							<svg className="icon u-icon" style={{ width: size, height: size, color }}>
								<use xlinkHref={`#icon-${value}`} />
							</svg>
						</Button>
					</div>
				)}
				{isVisible && (
					<Popover onFocusOutside={() => toggleVisible()}>
						<div className="iis-icon-select">
							{icons.map((icon) => (
								<button
									type="button"
									className={`iis-icon-select__icon ${(value === icon.id) ? 'is-selected' : ''}`}
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
			<svg
				style={{
					display: 'none',
				}}
				width="100%"
				height="100%"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
			>
				<defs>
					<symbol id="icon-search" viewBox="0 0 32 32">
						<path
							d="M24,21.8l8,8L29.9,32l-8-8c-5.9,4.6-14.3,3.6-19-2.2S-0.7,7.6,5.1,2.9S19.3-0.7,24,5.1C27.9,10,27.9,16.9,24,21.8L24,21.8z M13.4,23.9c5.8,0,10.5-4.7,10.5-10.5S19.2,3,13.4,3S3,7.7,3,13.4S7.7,23.9,13.4,23.9z"/>
					</symbol>
					<symbol id="icon-arrow-forwards" viewbox="0 0 18.9 32">
						<polygon points="2.8,0 18.9,16 2.8,32 0,29.1 12.5,16 0,2.9 "/>
					</symbol>
					<symbol id="icon-arrow-backwards" viewbox="0 0 18.1 32">
						<polygon points="16,32 0,16 16,0 18.9,2.9 5.9,16 18.9,29.1 "/>
					</symbol>
					<symbol id="icon-arrow-down" viewbox="0 0 32 18.9">
						<polygon points="32,2.9 16,18.9 0,2.9 2.9,0 16,13.1 29.1,0 "/>
					</symbol>
					<symbol id="icon-arrow-variant" viewbox="0 0 32 32">
						<path
							d="M16.4 1.5l-2.2 2.2 10.4 10.7H1.5v3.2h23.1L14.2 28.3l2.2 2.2L30.5 16z"/>
					</symbol>
					<symbol id="icon-hamburger" viewbox="0 0 32 22.4">
						<path
							d="M32,0v3.2H0V0H32z M32,9.6v3.2H0V9.6C0,9.6,32,9.6,32,9.6z M32,19.2v3.2H0v-3.2H32z"/>
					</symbol>
					<symbol id="icon-close" viewbox="0 0 32 32">
						<path d="M27.5,2L30,4.5L4.5,30L2,27.5L27.5,2z"/>
						<path d="M30,27.5L27.5,30L2,4.5L4.5,2L30,27.5z"/>
					</symbol>
					<symbol id="icon-check" viewbox="0 0 32 24.42">
						<polygon
							points="12.04 24.42 0 13.26 2.87 10.16 11.81 18.44 28.9 0 32 2.87 12.04 24.42"/>
					</symbol>
					<symbol id="icon-quote" viewbox="0 0 16 32">
						<path d="M16,0v24H8v-8H0V0H16z M0,24h8v8H0C0,32,0,24,0,24z"/>
					</symbol>
					<symbol id="icon-file" viewbox="0 0 23.4 32">
						<path d="M0,1.8h0.8v28.5H0V1.8z M22.6,8.8h0.8v21.5h-0.8V8.8z M1.5,31.2h20.6V32H1.5V31.2z M1.5,0h12v0.8h-12V0z M13.5,2.1h0.8v6.8
				h-0.8V2.1z"/>
						<path d="M14.6,1.2l0.6-0.6l7.6,7.1l-0.6,0.6L14.6,1.2z"/>
						<path d="M14.4,8.8h7.3v0.8h-7.3C14.4,9.6,14.4,8.8,14.4,8.8z"/>
						<text transform="matrix(1 0 0 1 3.5493 27.0766)" class="icon-file-text"
							  font-size="6">.FILE
						</text>
					</symbol>
					<symbol id="icon-download" viewbox="0 0 28.6 32">
						<path
							d="M13.2,0h2.7v23.7h-2.7V0L13.2,0z M24.9,13.7l1.7,2.1l-12,9.6L2.5,15.7l1.7-2.1l10.3,8.3L24.9,13.7z M0,32v-2.7h28.6V32H0z"/>
					</symbol>
					<symbol id="icon-upload" viewbox="0 0 28.6 32">
						<path
							d="M15.4 32h-2.7V8.3h2.7V32zM3.7 18.3L2 16.2l12-9.6 12.1 9.7-1.7 2.1-10.3-8.3-10.4 8.2zM28.6 0v2.7H0V0h28.6z"/>
					</symbol>
					<symbol id="icon-filter" viewbox="0 0 32 22">
						<path d="M0 3.4h32v3.2H0zM0 15.4h32v3.2H0z"/>
						<path d="M5.4 0h3.2v10H5.4zM23.4 12h3.2v10h-3.2z"/>
					</symbol>
					<symbol id="icon-read" viewbox="0 0 32 16.5">
						<path
							d="M32,9.6l-2.6,1.3c-2.5-5.1-7-8-13.4-8C10,2.9,5.3,6.1,2.6,11L0,9.6C3.1,3.8,8.8,0,16,0C23.5,0,29,3.6,32,9.6z"/>
						<path d="M16,16.2c-3.2,0-5.9-2.6-5.9-5.9s2.6-5.9,5.9-5.9s5.9,2.6,5.9,5.9S19.2,16.2,16,16.2z M16,13.2c1.6,0,2.9-1.3,2.9-2.9
				S17.6,7.4,16,7.4s-3,1.3-3,2.9C13,11.9,14.4,13.2,16,13.2z"/>
					</symbol>
					<symbol id="icon-pin" viewbox="0 0 22 32">
						<path
							d="M11 5.8c-2.4 0-4.4 2-4.4 4.4s2 4.4 4.4 4.4 4.4-2 4.4-4.4-2-4.4-4.4-4.4z"/>
						<path
							d="M11 2.6c4.3 0 8 3.5 8 8 0 1.9-2.5 7.9-7.9 16.4-5.5-8.5-7.9-14.6-7.9-16.4-.2-4.5 3.5-8 7.8-8M11 0C5.1 0 .3 4.8.3 10.7S11 32 11 32s10.7-15.4 10.7-21.3S16.9 0 11 0z"/>
					</symbol>
					<symbol id="icon-user" viewbox="0 0 32 32">
						<path
							d="M16 22c-1.3 0-2.6-.5-3.7-1.4l-.1-.1c-2.2-1.8-3.7-4.9-3.7-7.7 0-4.2 3.4-7.6 7.6-7.6s7.6 3.4 7.6 7.6c0 2.8-1.5 6-3.7 7.7l-.1.1c-1.3.9-2.6 1.4-3.9 1.4zm1.9-3.8l1 1.1-1-1.1c1.6-1.2 2.7-3.6 2.7-5.4 0-2.5-2-4.6-4.6-4.6-2.5 0-4.6 2-4.6 4.6 0 1.9 1.1 4.2 2.6 5.4 1.4 1.1 2.6 1 3.9 0z"/>
						<path
							d="M16 31.5c-3.6 0-7.1-1.3-9.9-3.5-.3-.3-.5-.7-.5-1.2 0-4.5 2.8-7.4 7-8.9.4-.2.9-.1 1.3.2.1 0 .1.1.2.2 1.2.9 2.5.9 3.7 0 .1-.1.2-.1.2-.2.4-.3.9-.3 1.3-.2 4.2 1.4 7 4.4 7 8.8 0 .4-.2.9-.5 1.2-2.7 2.3-6.2 3.6-9.8 3.6zm-7.4-5.4c2.1 1.6 4.7 2.4 7.4 2.4s5.2-.8 7.4-2.4c-.2-2.6-1.9-3.9-4.3-5-2 1.2-4.2 1.2-6.2 0-2.4 1.1-4 2.4-4.3 5zm16.3.7zm-12.8-6.3z"/>
						<g transform="translate(-624 -576)">
							<path class="st0"
								  d="M640 604.5c6.9 0 12.5-5.6 12.5-12.5s-5.6-12.5-12.5-12.5-12.5 5.6-12.5 12.5 5.6 12.5 12.5 12.5m0 3c-8.6 0-15.5-6.9-15.5-15.5s6.9-15.5 15.5-15.5 15.5 6.9 15.5 15.5-6.9 15.5-15.5 15.5"/>
						</g>
					</symbol>
					<symbol id="icon-language" viewbox="0 0 26 26">
						<path
							d="M18.678 11.45h1.69L26 25.92h-2.376l-1.178-3.256h-5.817L15.43 25.92h-2.406l5.654-14.47zm3.072 9.319l-2.212-6.114-2.223 6.114h4.435zM7.294.08h2.067v4.775H7.294z"/>
						<path d="M0 3.822h16.656v2.067H0z"/>
						<path
							d="M3.924 17.286l-.957-1.833A21.99 21.99 0 0013.068 4.458l1.908.797A24.072 24.072 0 013.924 17.286z"/>
						<path
							d="M12.693 17.265a24.114 24.114 0 01-8.928-8.089L5.493 8.04a22.036 22.036 0 008.16 7.394l-.96 1.831z"/>
					</symbol>
					<symbol id="icon-linkedin" viewbox="0 0 32 32">
						<path d="M29.6,0H2.4C1.1,0,0,1,0,2.3v27.4C0,31,1.1,32,2.4,32h27.3c1.3,0,2.4-1,2.4-2.3V2.3C32,1,30.9,0,29.6,0z M9.7,26.8H4.9V12.3
				h4.8V26.8z M7.3,10.4L7.3,10.4c-1.7,0-2.7-1.1-2.7-2.5c0-1.4,1.1-2.5,2.7-2.5C9,5.4,10,6.5,10,7.9C10,9.3,9,10.4,7.3,10.4z
				 M27.1,26.8h-4.8v-7.7c0-1.9-0.7-3.3-2.4-3.3c-1.3,0-2.1,0.9-2.5,1.8c-0.1,0.3-0.2,0.7-0.2,1.2v8.1h-4.8c0,0,0.1-13.1,0-14.4h4.8v2
				c0.6-1,1.8-2.4,4.4-2.4c3.2,0,5.6,2.1,5.6,6.5L27.1,26.8L27.1,26.8z M17.2,14.4C17.2,14.4,17.2,14.4,17.2,14.4L17.2,14.4L17.2,14.4z
				"/>
					</symbol>
					<symbol id="icon-facebook" viewbox="0 0 32 32">
						<path d="M30.2,0H1.8C0.8,0,0,0.8,0,1.8c0,0,0,0,0,0v28.5c0,1,0.8,1.8,1.8,1.8c0,0,0,0,0,0h15.3V19.6h-4.2v-4.8h4.2v-3.6
				c0-4.1,2.5-6.4,6.2-6.4C25.1,4.8,26.6,5,27,5v4.3l-2.6,0c-2,0-2.4,1-2.4,2.4v3.1h4.8l-0.6,4.8h-4.2V32h8.2c1,0,1.8-0.8,1.8-1.8V1.8
				C32,0.8,31.2,0,30.2,0C30.2,0,30.2,0,30.2,0z"/>
					</symbol>
					<symbol id="icon-instagram" viewbox="0 0 32 32">
						<path d="M23.2,0H8.8C4,0,0,4,0,8.8v14.3C0,28,4,32,8.8,32h14.3c4.9,0,8.8-4,8.8-8.8V8.8C32,4,28,0,23.2,0z M29.2,23.2
				c0,3.3-2.7,6-6,6H8.8c-3.3,0-6-2.7-6-6V8.8c0-3.3,2.7-6,6-6h14.3c3.3,0,6,2.7,6,6L29.2,23.2L29.2,23.2z"/>
						<path d="M16,7.8c-4.5,0-8.2,3.7-8.2,8.2c0,4.5,3.7,8.2,8.2,8.2s8.2-3.7,8.2-8.2C24.2,11.5,20.5,7.8,16,7.8z M16,21.4
				c-3,0-5.4-2.4-5.4-5.4c0-3,2.4-5.4,5.4-5.4s5.4,2.4,5.4,5.4C21.4,19,19,21.4,16,21.4z M24.6,5.3c-0.5,0-1.1,0.2-1.5,0.6
				c-0.4,0.4-0.6,0.9-0.6,1.5c0,0.5,0.2,1.1,0.6,1.5c0.4,0.4,0.9,0.6,1.5,0.6c0.5,0,1.1-0.2,1.5-0.6c0.4-0.4,0.6-0.9,0.6-1.5
				c0-0.5-0.2-1.1-0.6-1.5C25.7,5.6,25.1,5.3,24.6,5.3z"/>
					</symbol>
					<symbol id="icon-twitter" viewbox="0 0 32 26.02">
						<path d="M32,3.1c-1.2,0.5-2.5,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6C25.7,0.8,24,0,22.2,0
				c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5C10.4,7.8,5.6,5.2,2.3,1.2c-0.6,1-0.9,2.1-0.9,3.3c0,2.3,1.2,4.3,2.9,5.5
				c-1,0-2.1-0.3-3-0.8v0.1c0,3.2,2.3,5.8,5.3,6.4c-0.5,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1c0.8,2.6,3.3,4.5,6.1,4.6
				c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,3,10.1,3c12.1,0,18.6-10,18.6-18.6V6.6C30,5.5,31.1,4.4,32,3.1L32,3.1z"/>
					</symbol>
					<symbol id="icon-x" viewbox="0 0 32 32">
						<rect width="32" height="31.9" rx="7.2" ry="7.2"/>
						<path fill="#fff"
							  d="M20.2 9.3h2.3l-4.9 5.6 5.8 7.7h-4.5l-3.6-4.7-4.1 4.7H8.9l5.3-6-5.6-7.3h4.7l3.2 4.3 3.7-4.3Zm-.8 12h1.3l-8.1-10.7h-1.3l8.2 10.7Z"/>
					</symbol>
					<symbol id="icon-external-link" viewbox="0 0 32 32">
						<polygon points="18,0 23.3,5.3 14.3,14.3 17.7,17.7 26.7,8.7 32,14 32,0"/>
						<polygon
							points="28.5,18.5 28.5,28.5 3.5,28.5 3.5,3.5 10.5,3.5 10.5,0 0,0 0,32 32,32 32,18.5"/>
					</symbol>
					<symbol id="icon-app-share" viewbox="0 0 32 32">
						<path d="M6.3 10.2h7.4V23h4.9V10.2H26L16.1.3z"/>
						<path d="M28.5 4v24.5h-25V4H0v28h32V4z"/>
					</symbol>
					<symbol id="icon-print" viewbox="0 0 32 32">
						<path class="cls-1"
							  d="M32 9.78h-5.51V6L20.6 0h-15v9.78H0v14.44h5.56V32h20.93v-7.78H32zM23 6h-3.14V2.82zM8.06 2.5h9.8V8H24v1.78H8.06zM24 29.5H8.06v-7.62l15.94.05zm5.51-7.78h-3v-2.28l-20.95-.07v2.35H2.5v-9.44h27z"/>
						<path class="cls-1"
							  d="M10.94 23.25h10v1.5h-10zM10.94 26.5h10V28h-10zM23.85 14h3.8v2h-3.8z"/>
					</symbol>
					<symbol id="icon-chapters" viewbox="0 0 32 32">
						<path
							d="M26.7 6.4V1H2.5v25.7L7.1 31h22.4V6.4h-2.8zm-2.3-3.1v3H8.9l-2.7-3h18.2zm2.8 25.4H8l-3.2-3V5.4l3 3.3h3.9v7.6l2.4-1.5 2.2 1.5V8.7h10.8v20z"/>
					</symbol>
					<symbol id="icon-article" viewbox="0 0  32 32">
						<path
							d="M27.2 30.2H4.8V1.8h16.8l5.7 5.7v22.7zm-20-2.4h17.5V8.5l-4.2-4.3H7.2v23.6z"/>
						<path
							d="M12.7 20.3h-2.2v-2.5h11v2.5h-8.8zM12.3 25.3h-1.8v-2.5h9v2.5h-7.2zM25 9.7h-5.7V4h1.5v4.2H25zM12.7 15.3h-2.2v-2.5h11v2.5h-8.8z"/>
					</symbol>
					<symbol id="icon-padlock" viewbox="0 0 32 32">
						<path
							d="M26.5 12V7.4c0-3.3-2.6-5.9-5.9-5.9h-9.2c-3.3 0-5.9 2.6-5.9 5.9V12H3v18h26V12h-2.5zm-18-4.6c0-1.6 1.3-2.9 2.9-2.9h9.2c1.6 0 2.9 1.3 2.9 2.9V12h-15V7.4zM26 27H6V15h20v12z"/>
						<path
							d="M17.9 19.4c0-1.1-.9-1.9-1.9-1.9s-1.9.9-1.9 1.9c0 .6.2 1.1.6 1.4v3.7h2.5v-3.7c.5-.3.7-.8.7-1.4z"/>
					</symbol>
					<symbol id="icon-trash" viewbox="0 0 32 32">
						<path
							d="M28.3 6.9h-8V2.4h-8.5v4.5h-8v2.5h2v20.8h20.5V9.4h2V6.9zM11.6 27.6H8.2V9.4h3.4v18.2zm6.1 0h-3.5V9.4h3.5v18.2zm.1-20.7h-3.5v-2h3.5v2zm6 20.9h-3.6V9.4h3.6v18.4z"/>
					</symbol>
					<symbol id="icon-link" viewbox="0 0 32 32">
						<path
							d="M14.3 16.3l.7.7c.9.9 2.1 1.4 3.3 1.4 1.3 0 2.5-.5 3.4-1.4l5.1-5.1c1.9-1.9 1.9-4.9 0-6.8s-4.9-1.9-6.8 0l-3.6 3.6L13.7 6l3.6-3.6c3.3-3.3 8.8-3.3 12.1 0 3.3 3.3 3.3 8.8 0 12.1l-5.1 5.1c-1.6 1.6-3.8 2.5-6.1 2.5s-4.4-.9-6-2.5l-.7-.7 2.8-2.6z"/>
						<path
							d="M17.7 15.7L17 15c-1.9-1.8-4.9-1.8-6.7 0l-5.1 5c-1.9 1.9-1.9 4.9 0 6.8.9.9 2.1 1.4 3.4 1.4s2.5-.5 3.4-1.4l3.6-3.6 2.7 2.7-3.6 3.6C13 31.1 10.9 32 8.6 32s-4.5-.9-6.1-2.5c-3.3-3.3-3.3-8.8 0-12.1l5.1-5.1c3.3-3.3 8.8-3.3 12.1 0l.7.7-2.7 2.7z"/>
					</symbol>
					<symbol id="icon-share" viewbox="0 0 32 32">
						<path
							d="M17.4 19.6c.5-.4 1.1-.6 1.7-.6 1.6.1 2.8 1.4 2.8 3 .1 1.6-1.2 3-2.8 3-1.6-.1-2.8-1.4-2.8-3v-.5l-4.9-3.2c-.5.4-1.1.6-1.7.6-1.6-.1-2.9-1.4-2.8-3 0-1.6 1.2-2.9 2.8-3 .6 0 1.2.2 1.7.6l4.9-3.2v-.5c-.1-1.6 1.2-3 2.8-3 1.6.1 2.9 1.4 2.8 3 0 1.6-1.2 2.9-2.8 3-.6 0-1.2-.2-1.7-.6l-4.9 3.2v1l4.9 3.2z"/>
						<g transform="translate(-624 -576)">
							<path class="st0"
								  d="M640 604.5c6.9 0 12.5-5.6 12.5-12.5s-5.6-12.5-12.5-12.5-12.5 5.6-12.5 12.5 5.6 12.5 12.5 12.5m0 3c-8.6 0-15.5-6.9-15.5-15.5s6.9-15.5 15.5-15.5 15.5 6.9 15.5 15.5-6.9 15.5-15.5 15.5"/>
						</g>
					</symbol>
					<symbol id="icon-questionmark" viewbox="0 0 32 32">
						<path
							d="M16.5 23.9h-2.2v-2.3h2.2v2.3zm3.6-10c-.5.8-1.1 1.5-1.8 2.1-.6.5-1.3 1.1-1.6 1.8-.2.4-.3.8-.3 1.3h-2c0-.7.2-1.4.5-2 .5-.8 1-1.5 1.7-2.1.6-.5 1.2-1 1.6-1.6.3-.4.3-.8.3-1.3 0-.8-.3-1.5-.8-2.1-.8-.6-1.7-1-2.4-.9-1.7 0-2.7 1-3.1 3h-2c.1-1.3.6-2.6 1.6-3.4 1-.9 2.3-1.4 3.7-1.3 1.4-.1 2.7.4 3.8 1.3.9.8 1.5 2 1.5 3.2-.2.7-.4 1.4-.7 2z"/>
						<path
							d="M14 21.1h3.2v3.3H14v-3.3zm3-1.5h-3v-.5c0-.7.2-1.4.5-2.2.5-.9 1.1-1.6 1.9-2.3.7-.5 1.1-1 1.4-1.5.2-.3.2-.6.2-1 0-.7-.2-1.2-.7-1.8-.5-.4-1.2-.7-1.8-.7-1.5 0-2.4.8-2.7 2.6l-.1.4h-3v-.5c.1-1.5.7-2.8 1.7-3.7 1.1-1 2.5-1.5 4-1.4 1.4-.1 2.8.4 4.1 1.4 1 .9 1.7 2.3 1.7 3.6-.1.9-.4 1.7-.7 2.2-.5.9-1.2 1.6-1.9 2.2-.7.5-1.2 1.1-1.5 1.7-.1.3-.2.7-.2 1.1v.4h.1z"/>
						<g transform="translate(-624 -576)">
							<path class="st0"
								  d="M640 604.5c6.9 0 12.5-5.6 12.5-12.5s-5.6-12.5-12.5-12.5-12.5 5.6-12.5 12.5 5.6 12.5 12.5 12.5m0 3c-8.6 0-15.5-6.9-15.5-15.5s6.9-15.5 15.5-15.5 15.5 6.9 15.5 15.5-6.9 15.5-15.5 15.5"/>
						</g>
					</symbol>
					<symbol id="icon-info" viewbox="0 0 32 32">
						<path d="M14.5 7.1h3v3.1h-3V7.1zm3 17.8h-3.1V12.7h3.1v12.2z"/>
						<g transform="translate(-624 -576)">
							<path class="st0"
								  d="M640 604.5c6.9 0 12.5-5.6 12.5-12.5s-5.6-12.5-12.5-12.5-12.5 5.6-12.5 12.5 5.6 12.5 12.5 12.5m0 3c-8.6 0-15.5-6.9-15.5-15.5s6.9-15.5 15.5-15.5 15.5 6.9 15.5 15.5-6.9 15.5-15.5 15.5"/>
						</g>
					</symbol>
					<symbol id="icon-contrast" viewbox="0 0 32 32">
						<path d="M15.4 6c5.5 0 10 4.5 10 10s-4.5 10-10 10V6z"/>
						<g transform="translate(-624 -576)">
							<path
								d="M640 604.5c6.9 0 12.5-5.6 12.5-12.5s-5.6-12.5-12.5-12.5-12.5 5.6-12.5 12.5 5.6 12.5 12.5 12.5m0 3c-8.6 0-15.5-6.9-15.5-15.5s6.9-15.5 15.5-15.5 15.5 6.9 15.5 15.5-6.9 15.5-15.5 15.5"/>
						</g>
					</symbol>
					<symbol id="icon-gauge" viewbox="0 0 32 32">
						<path
							d="M9.2 23.1c0 .3-.2.5-.5.5s-.5-.2-.5-.5.2-.5.5-.5.5.2.5.5M6.9 20c0 .3-.2.5-.5.5s-.5-.3-.5-.5c0-.3.2-.5.5-.5s.5.2.5.5M6.9 12.8c0 .3-.2.5-.5.5s-.5-.3-.5-.5c0-.3.2-.5.5-.5s.5.2.5.5M9.2 9.5c0 .3-.2.5-.5.5s-.4-.2-.4-.5.2-.5.4-.5c.3 0 .5.2.5.5M12.4 6.9c0 .3-.2.5-.5.5s-.5-.2-.5-.5.2-.5.5-.5.5.2.5.5M16.6 5.8c0 .4-.3.7-.7.7-.4 0-.7-.3-.7-.7s.3-.7.7-.7c.4-.1.7.3.7.7M6.3 16.6c0 .4-.3.7-.7.7-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.4 0 .7.3.7.7M22.7 23.1c0 .3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5M25 20c0 .3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5M25 12.8c0 .3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5M22.7 9.5c0 .3.2.5.5.5s.5-.2.5-.5-.3-.5-.6-.5c-.2 0-.4.2-.4.5M19.4 6.9c0 .3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5M25.5 16.6c0 .4.3.7.7.7.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7"/>
						<g transform="translate(-624 -576)">
							<path class="st0"
								  d="M640 604.5c6.9 0 12.5-5.6 12.5-12.5s-5.6-12.5-12.5-12.5-12.5 5.6-12.5 12.5 5.6 12.5 12.5 12.5m0 3c-8.6 0-15.5-6.9-15.5-15.5s6.9-15.5 15.5-15.5 15.5 6.9 15.5 15.5-6.9 15.5-15.5 15.5"/>
						</g>
						<path
							d="M18.1 14.1c-1-1.1-2.8-1.2-3.9-.2s-3.6 7-3.6 7 6.2-1.9 7.3-3c1.2-1 1.3-2.7.2-3.8zM16 17.4c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3.1.7-.5 1.3-1.3 1.3z"/>
					</symbol>
					<symbol id="icon-backward-15" viewbox="0 0 32 32">
						<path
							d="M16.6 4.1V1l-4.5 4.5 4.5 4.5V7c5.6.3 10 4.9 10 10.6 0 5.9-4.8 10.6-10.6 10.6S5.4 23.4 5.4 17.5c0-3.5 1.8-6.8 4.7-8.8L8.5 6.4c-3.7 2.5-5.9 6.7-5.9 11.2C2.5 25 8.6 31 16 31s13.5-6 13.5-13.5c0-7.2-5.8-13.1-12.9-13.4z"/>
						<path
							d="M12.5 14.5c0 .2-.1.5-.6.5h-1.1v1.3h1.6v4.8H14v-7.2h-1.5v.6zM18.7 16c-.3 0-.6 0-.8.1l.2-.8H21v-1.5h-4.1l-.9 4 1.4.4.1-.1c.2-.3.6-.6 1-.6.7 0 1.1.5 1.1 1.1 0 .6-.4 1.1-1.1 1.1-.8 0-1-.6-1.2-1.1v-.2l-1.5.4v.2c.3 1.3 1.4 2.2 2.6 2.2 1.5 0 2.7-1.2 2.7-2.6.1-1.4-1.1-2.6-2.4-2.6z"/>
					</symbol>
					<symbol id="icon-step-backwards" viewbox="0 0 32 32">
						<path d="m25.7 28.9-14.2-13 14.2-13v26zM9.753 28h-5V3h5z"/>
					</symbol>
					<symbol id="icon-play" viewbox="0 0 32 32">
						<path
							d="M16 28.5c6.9 0 12.5-5.6 12.5-12.5S22.9 3.5 16 3.5 3.5 9.1 3.5 16 9.1 28.5 16 28.5m0 3C7.4 31.5.5 24.6.5 16S7.4.5 16 .5 31.5 7.4 31.5 16 24.6 31.5 16 31.5"/>
						<path d="M11.7 8.2l11.4 7.7-11.4 7.7z"/>
					</symbol>
					<symbol id="icon-step-forwards" viewbox="0 0 32 32">
						<path d="m4.8 2.9 14.2 13-14.2 13v-26zM20.7 3.1h5v25h-5z"/>
					</symbol>
					<symbol id="icon-forward-60" viewbox="0 0 32 32">
						<path
							d="M15.4 4.1V1l4.5 4.5-4.5 4.5V7c-5.6.2-10.1 4.9-10.1 10.5 0 5.9 4.8 10.6 10.7 10.6s10.7-4.8 10.7-10.6c0-3.5-1.8-6.8-4.7-8.8l1.6-2.3c3.7 2.5 6 6.7 6 11.2C29.5 25 23.4 31 16 31S2.5 25 2.5 17.5c0-7.2 5.7-13.1 12.9-13.4z"/>
						<path
							d="M14.2 16.3c-.2-.1-.5-.1-.7-.2l1.4-2.2H13l-2.1 3.4c-.3.4-.4.9-.4 1.4 0 1.4 1.2 2.6 2.7 2.6 1.5 0 2.7-1.2 2.7-2.6 0-1.1-.7-2-1.7-2.4zm-1 3.4c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1 0 .7-.5 1.1-1.1 1.1zM18.9 13.8c-2.5 0-2.5 2.8-2.5 3.7 0 2.5.9 3.7 2.6 3.7 1.6 0 2.5-1.3 2.5-3.7 0-2.4-.9-3.7-2.6-3.7zm0 1.6c.9 0 .9 1 .9 2.2 0 1.2-.1 2.2-.9 2.2-.9 0-1-1-1-2.2.1-1.3.2-2.2 1-2.2z"/>
					</symbol>
					<symbol id="icon-pause" viewbox="0 0 32 32">
						<path d="M6 3h8v26H6zM18 3h8v26h-8z"/>
					</symbol>
					<symbol id="icon-subtitles" viewbox="0 0 32 32">
						<path d="M27 10v12H5V10h22m3-3H2v18h28V7z"/>
						<path d="M25 19h-4"/>
						<path d="M21 18h4v2h-4z"/>
						<path d="M19 19H7"/>
						<path d="M7 18h12v2H7z"/>
						<path d="M7 15h4"/>
						<path d="M7 14h4v2H7z"/>
						<path d="M13 15h12"/>
						<path d="M13 14h12v2H13z"/>
					</symbol>
					<symbol id="icon-author" viewbox="0 0 32 32">
						<path
							d="M4 29h24v2H4zM10.3 26H4v-6.3L22.1 1.6l6.3 6.3L10.3 26zM6 24h3.5L25.6 7.9l-3.5-3.5L6 20.5V24z"/>
						<path d="M17.07 6.69l1.414-1.414 6.293 6.293-1.414 1.415z"/>
					</symbol>
					<symbol id="icon-speaker" viewbox="0 0 32 32">
						<path
							d="M18 29a1 1 0 0 1-.57-.18l-10-7A1 1 0 0 1 7 21V11a1 1 0 0 1 .43-.82l10-7a1 1 0 0 1 1-.07A1 1 0 0 1 19 4v24a1 1 0 0 1-.54.89A1 1 0 0 1 18 29zm-9-8.52l8 5.6V5.92l-8 5.6z"/>
						<path class="cls-1"
							  d="M8 22H4a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h4a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM4 12a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3v-8zM18 21v-2a3 3 0 0 0 2.12-5.12l1.42-1.42A5 5 0 0 1 18 21z"/>
						<path class="cls-1"
							  d="M23.65 22.65a1 1 0 0 1-.7-.29A1 1 0 0 1 23 21a7 7 0 0 0 0-9.9 1 1 0 0 1 1.41-1.41 9 9 0 0 1 0 12.72 1 1 0 0 1-.76.24z"/>
					</symbol>
					<symbol id="icon-mute" viewbox="0 0 32 32">
						<path class="cls-1"
							  d="M18 29a1 1 0 0 1-.57-.18l-10-7A1 1 0 0 1 7 21V11a1 1 0 0 1 .43-.82l10-7a1 1 0 0 1 1-.07A1 1 0 0 1 19 4v24a1 1 0 0 1-.54.89A1 1 0 0 1 18 29zm-9-8.52l8 5.6V5.92l-8 5.6z"/>
						<path class="cls-1"
							  d="M8 22H4a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h4a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM4 12a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3v-8z"/>
						<path class="cls-1" transform="rotate(-45 25.758 16)"
							  d="M24.76 10h2v12h-2z"/>
						<path class="cls-1" transform="rotate(-45 25.758 16)"
							  d="M19.76 15h12v2h-12z"/>
					</symbol>
					<symbol id="icon-settings" viewbox="0 0 32 32">
						<path
							d="M31.5 18.2v-4.4h-4.7c-.3-1.4-.8-2.6-1.5-3.7l3.3-3.3-3.1-3.1L22.2 7c-1.2-.8-2.6-1.4-4-1.7V.5h-4.4v4.7c-1.4.2-2.7.8-3.9 1.6L6.7 3.6 3.6 6.7l3.2 3.2c-.8 1.2-1.3 2.5-1.6 3.9H.5v4.4h4.7c.3 1.5.9 2.8 1.7 4l-3.3 3.3 3.1 3.1 3.3-3.3c1.1.7 2.4 1.3 3.7 1.5v4.7h4.4v-4.7c1.4-.3 2.7-.8 3.9-1.6l3.4 3.4 3.1-3.1-3.4-3.4c.8-1.2 1.3-2.5 1.6-3.9h4.8zM16 23.5c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5 7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5z"/>
					</symbol>
					<symbol id="icon-lte" viewbox="0 0  32 32">
						<path
							d="M1.5 16v14.5h8.6v-2.8H4.4V16zM10.2 16v2.9h2.9v11.6H16V18.9h2.8V16zM21.9 16v14.3h8.6v-2.7h-5.8v-2.9l5.6-.1v-2.8h-5.6v-2.9h5.8V16zM20.5 12.3c-1.4-1.2-3.1-1.9-5.1-1.9-2 0-3.8.7-5.2 1.9L8.1 10c1.9-1.7 4.5-2.8 7.3-2.8s5.3 1 7.2 2.7l-2.1 2.4z"/>
						<path
							d="M24.5 8.1c-2.5-2.3-5.7-3.5-9.1-3.5-3.4 0-6.7 1.3-9.2 3.6L4 6c3.1-2.9 7.1-4.5 11.4-4.5 4.2 0 8.2 1.6 11.3 4.4l-2.2 2.2z"/>
					</symbol>
					<symbol id="icon-wifi" viewbox="0 0 32 21.9">
						<path
							d="M16.1 16.3c-1.6 0-2.8 1.3-2.8 2.8s1.3 2.8 2.8 2.8c1.6 0 2.8-1.3 2.8-2.8 0-1.6-1.2-2.8-2.8-2.8z"/>
						<path
							d="M22.8 14.3c-1.8-1.5-4.1-2.5-6.7-2.5-2.6 0-5 1-6.8 2.6l-2.8-3c2.6-2.3 5.9-3.6 9.6-3.6 3.6 0 7 1.3 9.5 3.6l-2.8 2.9z"/>
						<path
							d="M28.1 8.7c-3.3-3-7.6-4.6-12-4.6-4.5 0-8.8 1.7-12.2 4.7L1 5.9C5.1 2.1 10.4 0 16.1 0 21.6 0 26.9 2.1 31 5.8l-2.9 2.9z"/>
					</symbol>
					<symbol id="icon-reception" viewbox="0 0 32 32">
						<path d="M24 3h5v26h-5zM17 10h5v19h-5zM10 17h5v12h-5zM3 24h5v5H3z"/>
					</symbol>
					<symbol id="icon-2g" viewbox="0 0 32 32">
						<path
							d="M24 3h5v26h-5V3zm-7 7h5v19h-5V10zm-7 7h5v12h-5V17zm-7 7h5v5H3v-5z"/>
						<text transform="translate(2.72 9.396)" class="u-weight-bolder"
							  font-size="9">2G
						</text>
					</symbol>
					<symbol id="icon-3g" viewbox="0 0 32 32">
						<path
							d="M24 3h5v26h-5V3zm-7 7h5v19h-5V10zm-7 7h5v12h-5V17zm-7 7h5v5H3v-5z"/>
						<text transform="translate(2.72 9.396)" class="u-weight-bolder"
							  font-size="9">3G
						</text>
					</symbol>
					<symbol id="icon-4g" viewbox="0 0 32 32">
						<path
							d="M24 3h5v26h-5V3zm-7 7h5v19h-5V10zm-7 7h5v12h-5V17zm-7 7h5v5H3v-5z"/>
						<text transform="translate(2.72 9.396)" class="u-weight-bolder"
							  font-size="9">4G
						</text>
					</symbol>
					<symbol id="icon-5g" viewbox="0 0 32 32">
						<path
							d="M24 3h5v26h-5V3zm-7 7h5v19h-5V10zm-7 7h5v12h-5V17zm-7 7h5v5H3v-5z"/>
						<text transform="translate(2.72 9.396)" class="u-weight-bolder"
							  font-size="9">5G
						</text>
					</symbol>
					<symbol id="icon-latency" viewbox="0 0 32 32">
						<path
							d="M20.3 1h-8.6v2.9h8.6V1zm-5.7 18.6h2.9V11h-2.9v8.6zM26 10.1l2.1-2c-.7-.7-1.4-1.4-2.1-2l-2 2c-2.1-1.7-5-2.9-8-2.9-7.1 0-12.9 5.7-12.9 12.9S8.9 31 16 31s12.9-5.7 12.9-12.9c0-3-1-5.8-2.9-8zm-10 18c-5.6 0-10-4.4-10-10s4.4-10 10-10 10 4.4 10 10-4.4 10-10 10z"
							fill-rule="evenodd" clip-rule="evenodd"/>
					</symbol>
					<symbol id="icon-spinner" viewbox="0 0 100 100" class="spinner">
						<g>
							<circle cx="50" cy="50" fill="none" r="43" stroke="#50b2fc"
									stroke-width="7"></circle>
							<circle cx="50" cy="50" fill="none" r="43" stroke="#a7d8fd"
									stroke-width="7" stroke-linecap="square"
									transform="rotate(27.6965 50 50)">
								<animatetransform attributename="transform" type="rotate"
												  calcmode="linear"
												  values="0 50 50;180 50 50;720 50 50"
												  keytimes="0;0.5;1" dur="2.5s" begin="0s"
												  repeatcount="indefinite"></animatetransform>
								<animate attributename="stroke-dasharray" calcmode="linear"
										 values="9.42477796076938 179.0707812546182;188.4955592153876 -2.842170943040401e-14;9.42477796076938 179.0707812546182"
										 keytimes="0;0.5;1" dur="2.5" begin="0s"
										 repeatcount="indefinite"></animate>
							</circle>
						</g>
					</symbol>

					<symbol id="icon-spinner-white" viewbox="0 0 100 100" class="spinner">
						<g>
							<circle cx="50" cy="50" fill="none" r="43" stroke="none"
									stroke-width="7"></circle>
							<circle cx="50" cy="50" fill="none" r="43" stroke="#fff"
									stroke-width="7" stroke-linecap="square"
									transform="rotate(27.6965 50 50)">
								<animatetransform attributename="transform" type="rotate"
												  calcmode="linear"
												  values="0 50 50;180 50 50;720 50 50"
												  keytimes="0;0.5;1" dur="2.5s" begin="0s"
												  repeatcount="indefinite"></animatetransform>
								<animate attributename="stroke-dasharray" calcmode="linear"
										 values="9.42477796076938 179.0707812546182;188.4955592153876 -2.842170943040401e-14;9.42477796076938 179.0707812546182"
										 keytimes="0;0.5;1" dur="2.5" begin="0s"
										 repeatcount="indefinite"></animate>
							</circle>
						</g>
					</symbol>

					<symbol id="icon-3d" viewbox="0 0 30 18">
						<path
							d="M0 12.186l2.954-.183c0 1.927 1.501 3.027 3.503 3.027 1.77 0 3.393-.879 3.393-2.722 0-2.453-2.27-2.527-4.223-2.527V7.425c2.905 0 3.271-.867 3.271-2.197 0-1.501-1.098-2.221-2.49-2.221-1.575 0-2.625.927-2.649 2.454L.83 5.253C.83 2.006 3.381.127 6.359.127c2.868 0 5.516 1.757 5.516 4.722 0 1.355-.55 2.759-2.245 3.552 2.294.623 3.174 2.282 3.174 4.149 0 3.503-3.027 5.321-6.395 5.321C2.978 17.873 0 16.006 0 12.186zM16.026.383h5.004c5.871 0 8.97 3.148 8.97 8.75 0 5.37-3.198 8.494-8.995 8.494h-4.979V.383zM20.7 14.785c3.808 0 6.2-1.477 6.2-5.786 0-4.088-1.671-5.772-5.919-5.772h-1.855v11.558H20.7z"/>
					</symbol>

					<symbol id="icon-accessibility" viewbox="0 0 28 31">
						<path
							d="M17.244 20.144a7.335 7.335 0 0 1-4.359 7.172 7.271 7.271 0 0 1-5.597.117 7.26 7.26 0 0 1-4.04-3.875c-1.621-3.692.065-8.016 3.757-9.637l.16-.07-.347-2.669-.273.1a10 10 0 0 0-6.072 6.326 9.876 9.876 0 0 0 .643 7.581 9.87 9.87 0 0 0 5.815 4.905 9.891 9.891 0 0 0 7.581-.643 9.875 9.875 0 0 0 4.906-5.815l.029-.09-2.277-4.554.074 1.152z"/>
						<path
							d="M26.811 21.501l-3.333 1.669-3.739-7.459a1.304 1.304 0 0 0-1.169-.718h-7.46l-.211-1.691h6.824v-2.624H10.57l-.563-4.398a2.902 2.902 0 0 0 2.001-.854 2.902 2.902 0 0 0 .858-2.068 2.903 2.903 0 0 0-.855-2.068A2.916 2.916 0 0 0 9.904.431a2.9 2.9 0 0 0-2.779 2.088c-.073.254-.11.514-.108.803l1.618 13.129a1.347 1.347 0 0 0 1.309 1.163h7.811l3.962 7.91c.224.443.672.718 1.165.719h.02c.203 0 .404-.05.577-.143L28 23.838l-1.189-2.337z"/>
					</symbol>

					<symbol id="icon-cafe" viewbox="0 0 22 30">
						<path
							d="M21.52 3.195h-1.104L19.39.064H2.61L1.584 3.195H.48V8.69h1.169l1.018 21.245h16.667L20.352 8.69h1.169V3.195zM3.595 15.888h14.809l-.209 4.354H3.804l-.209-4.354zm.597 12.448l-.311-6.494H18.12l-.311 6.494H4.192zm14.289-14.048H3.519L3.25 8.691h15.5l-.269 5.597z"/>
					</symbol>

					<symbol id="icon-capacity" viewbox="0 0 30 18">
						<path
							d="M21.516 14.702a5.911 5.911 0 0 0-4.344-5.566h-.136c.136 0 .136-.136.271-.136a6.14 6.14 0 0 0 2.172-4.344 4.344 4.344 0 0 0-8.688-.004v.004A5.466 5.466 0 0 0 12.963 9l.137.137h-.136c-2.579.95-4.344 2.715-4.344 5.566v2.986h12.896v-2.987z"/>
						<path
							d="M9.473 9.646a4.486 4.486 0 0 0-2.631-1.785h-.109c.109 0 .109-.109.217-.109a5.362 5.362 0 0 0 1.738-3.584A3.43 3.43 0 0 0 5.303.693h-.09a3.43 3.43 0 0 0-3.475 3.385v.09a4.37 4.37 0 0 0 1.737 3.475l.109.109h-.109A4.728 4.728 0 0 0 0 12.205v2.389h7.269c.027-1.983.794-3.666 2.204-4.948zM26.525 7.752h-.109c.109 0 .109-.109.217-.109a4.912 4.912 0 0 0 1.738-3.475 3.475 3.475 0 1 0-6.951-.003v.003a4.37 4.37 0 0 0 1.738 3.475l.109.109h-.109c-1.091.402-1.991.993-2.606 1.792a7.322 7.322 0 0 1 2.311 5.05H30v-2.389a4.727 4.727 0 0 0-3.475-4.453z"/>
					</symbol>

					<symbol id="icon-display" viewbox="0 0 30 25">
						<path id="Rectangle_158_1_"
							  d="M28 2.295v16.411H2V2.295h26m2-2H0v20.411h30V.295z"/>
						<path d="M1.834 22.705h26.332v2H1.834z"/>
					</symbol>

					<symbol id="icon-email" viewbox="0 0 26 19">
						<path
							d="M.375.454v18.092h25.25V.454H.375zm23.333 5.504v7.997l-6.773-3.72 6.773-4.277zm0 10.184v.488H2.292v-.488l8.627-4.738L13 12.716l2.082-1.312 8.626 4.738zm0-12.451L13 10.45 2.292 3.691v-1.32h21.417v1.32zM2.292 13.954V5.958l6.774 4.276-6.774 3.72z"/>
					</symbol>

					<symbol id="icon-headset" viewbox="0 0 25 25">
						<path
							d="M22.63 11.185v-1C22.63 4.597 18.084.051 12.496.051S2.362 4.597 2.362 10.185v1H.365v7.258h2.448l3.075 5.808H10v.699h5v-2.997h-5v.698H6.852l-2.49-4.703v-7.763c0-4.485 3.649-8.134 8.134-8.134S20.63 5.7 20.63 10.185v8.258h4.005v-7.258H22.63z"/>
					</symbol>

					<symbol id="icon-phone" viewbox="0 0 20 29">
						<path
							d="M17.52.174H2.479C1.385.174.495 1.093.495 2.223v24.554c0 1.13.89 2.049 1.984 2.049H17.52c1.094 0 1.984-.919 1.984-2.049V2.223c.001-1.13-.89-2.049-1.984-2.049zm-.005 20.827H2.495V7.098h15.012l.008 13.903zm-.01-18.778l.002 3.875H2.495V2.223l-.016-.049 15.026.049zM2.495 26.777v-4.776h15.021l.004 4.825-15.025-.049z"/>
						<circle cx="10.008" cy="24.413" r="1.5"/>
						<path d="M7.932 3.636h4.135v1H7.932z"/>
					</symbol>

					<symbol id="icon-plus" viewbox="0 0 37 37">
						<path
							d="M36.531 16.732H20.268V.469h-3.536v16.263H.469v3.536h16.263v16.263h3.536V20.268h16.263z"/>
					</symbol>

					<symbol id="icon-podcast" viewbox="0 0 21 28">
						<path
							d="M18.312 13.274h2.49a9.319 9.319 0 0 1-2.593 6.534 10.434 10.434 0 0 1-6.257 3.353V28h-2.9v-4.839a10.445 10.445 0 0 1-6.257-3.353 9.315 9.315 0 0 1-2.597-6.534h2.49c-.054 2.04.793 4 2.316 5.358a7.89 7.89 0 0 0 5.5 2.109 7.89 7.89 0 0 0 5.5-2.109 6.932 6.932 0 0 0 2.316-5.358h-.008zm-7.813 4.425a4.488 4.488 0 0 1-4.425-4.425V4.425a4.248 4.248 0 0 1 1.314-3.111 4.34 4.34 0 0 1 6.221 0 4.255 4.255 0 0 1 1.314 3.111v8.85a4.488 4.488 0 0 1-4.425 4.425l.001-.001z"/>
					</symbol>

					<symbol id="icon-richtext-bold" viewbox="0 0 10 14">
						<path
							d="M.55 13.209h4.844c2.109 0 4.056-1.292 4.056-3.6a3.45 3.45 0 0 0-2-3.041A2.797 2.797 0 0 0 8.83 4.14C8.83 1.653 6.747.791 4.857.791H.55v12.418zm2.232-7.418V2.803h2.111c1.063 0 1.89.492 1.89 1.459 0 1.222-.844 1.529-1.714 1.529H2.782zm0 5.291V7.716h2.559A1.734 1.734 0 0 1 7.25 9.359c0 1.169-.67 1.723-1.821 1.723H2.782z"/>
					</symbol>

					<symbol id="icon-richtext-bullet-list" viewbox="0 0 17 15">
						<circle cx="1.86" cy="2.291" r="1.86"/>
						<circle cx="1.86" cy="7.5" r="1.86"/>
						<circle cx="1.86" cy="12.709" r="1.86"/>
						<path
							d="M6.07 1.291H17v2H6.07zM6.07 6.5H17v2H6.07zM6.07 11.709H17v2H6.07z"/>
					</symbol>

					<symbol id="icon-richtext-italic" viewbox="0 0 10 14">
						<path
							d="M10.082 2.282v-2H4.364v2h1.508l-3.908 9.436H-.082v2h5.718v-2H4.129l3.908-9.436z"/>
					</symbol>

					<symbol id="icon-streaming" viewbox="0 0 28 20">
						<path
							d="M25.967 9.989a11.93 11.93 0 0 1-3.49 8.438l1.436 1.436A13.97 13.97 0 0 0 28 9.98c-.032-3.804-1.603-7.267-4.113-9.797l-1.433 1.433c2.144 2.165 3.486 5.124 3.513 8.373zM2.031 9.989c0-3.279 1.327-6.252 3.471-8.416L4.066.137A13.953 13.953 0 0 0 0 9.989c0 3.85 1.563 7.341 4.086 9.874l1.436-1.436a11.93 11.93 0 0 1-3.491-8.438z"/>
						<path
							d="M20.772 9.989a6.75 6.75 0 0 1-1.967 4.766L20.4 16.35a9.014 9.014 0 0 0 2.63-6.371c-.021-2.445-1.029-4.67-2.638-6.3l-1.593 1.593a6.798 6.798 0 0 1 1.973 4.717zM7.228 9.989c0-1.846.745-3.521 1.947-4.744L7.579 3.65A8.998 8.998 0 0 0 4.97 9.989a8.997 8.997 0 0 0 2.629 6.361l1.595-1.595a6.753 6.753 0 0 1-1.966-4.766z"/>
						<path id="Path_68"
							  d="M14 6.885a3.104 3.104 0 1 0 3.104 3.104A3.132 3.132 0 0 0 14 6.885z"/>
					</symbol>

					<symbol id="icon-time" viewbox="0 0 20 20">
						<path
							d="M10 2.2c4.301 0 7.8 3.499 7.8 7.8s-3.499 7.8-7.8 7.8-7.8-3.499-7.8-7.8S5.699 2.2 10 2.2M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0z"/>
						<path d="M14.522 11.46H8.941V4.078h2.118v5.265h3.463z"/>
					</symbol>

					<symbol id="icon-drag-item" viewbox="0 0 32 32">
						<circle cx="10" cy="6" r="3.5"/>
						<circle cx="10" cy="16" r="3.5"/>
						<circle cx="10" cy="26" r="3.5"/>
						<circle cx="21" cy="6" r="3.5"/>
						<circle cx="21" cy="16" r="3.5"/>
						<circle cx="21" cy="26" r="3.5"/>
					</symbol>

					<symbol id="icon-personal-data" viewbox="0 0 32 32">
						<path
							d="M18 19.2c0-2-1.4-3.7-3.3-4.2h-.1c.1 0 .1-.1.2-.1 1-.8 1.6-2 1.6-3.3 0-1.8-1.5-3.3-3.3-3.3-1.8 0-3.3 1.5-3.3 3.3 0 1.3.6 2.5 1.6 3.3l.1.1h-.1c-2 .7-3.3 2.1-3.3 4.2v1.4H18v-1.4z"/>
						<path
							d="M19 25.6c-2.3 1.6-4.8 2.5-5.7 2.8-.2.1-.4.1-.5 0-1.7-.6-10.1-3.7-10.1-9.8v-13c1.5-.6 6-2.1 10.4-2.1S22 5 23.5 5.6v8.3c.6-.1 1.1-.2 1.7-.2V4.5l-.5-.2c-.3-.1-5.9-2.5-11.7-2.5S1.7 4.2 1.4 4.3l-.5.2v14.1c0 7.2 8.7 10.6 11.3 11.5.3.1.5.1.8.1.3 0 .5 0 .8-.1 1.3-.4 3.9-1.4 6.3-3.1-.4-.5-.8-.9-1.1-1.4z"/>
						<path
							d="M25.3 15.8c-3.1 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5-2.4-5.5-5.5-5.5zm-.7 7.8l-2.3-2.1.5-.6 1.7 1.6 3.2-3.5.6.5-3.7 4.1z"/>
					</symbol>

					<symbol id="icon-romance" viewbox="0 0 32 32">
						<path
							d="M15.953 29.329l-12.6-12.7c-3.2-3.2-3.2-8.4 0-11.7 1.5-1.6 3.6-2.4 5.8-2.4 2.2 0 4.3.8 5.8 2.4l.9.9.9-.9c3.2-3.2 8.5-3.2 11.7 0 3.2 3.2 3.2 8.5 0 11.7l-12.5 12.7zm-6.8-24.6c-1.6 0-3.2.6-4.4 1.8-2.4 2.4-2.4 6.3 0 8.8l11.1 11.1 11.1-11.1c2.4-2.4 2.4-6.3 0-8.8-2.4-2.4-6.3-2.4-8.8 0l-2.4 2.4-2.4-2.4c-.9-1.2-2.6-1.8-4.2-1.8z"/>
						<path
							d="M15.953 29.329l-12.6-12.7c-3.2-3.2-3.2-8.4 0-11.7 1.5-1.6 3.6-2.4 5.8-2.4 2.2 0 4.3.8 5.8 2.4l.9.9.9-.9c3.2-3.2 8.5-3.2 11.7 0 3.2 3.2 3.2 8.5 0 11.7l-12.5 12.7zm-6.8-24.6c-1.6 0-3.2.6-4.4 1.8-2.4 2.4-2.4 6.3 0 8.8l11.1 11.1 11.1-11.1c2.4-2.4 2.4-6.3 0-8.8-2.4-2.4-6.3-2.4-8.8 0l-2.4 2.4-2.4-2.4c-.9-1.2-2.6-1.8-4.2-1.8z"/>
					</symbol>

					<symbol id="icon-shopping" viewbox="0 0 32 32">
						<path
							d="M23.3 2H8.6c-1.1 0-2 .9-1.9 2v24c0 1.1.9 2 1.9 2h14.7c1.1 0 2-.9 1.9-2V4c.1-1.1-.8-2-1.9-2zM8.6 28V4H18v24H8.6zm14.7 0h-2.5V4h2.5v24z"/>
					</symbol>

					<symbol id="icon-warning" viewbox="0 0 32 32">
						<path d="M17 24.1h-2v-2h2v2zm-2-11.7h2v8h-2v-8z"/>
						<path
							d="M29 28.3H3c-.4 0-.7-.2-.9-.5-.2-.3-.2-.7 0-1l13-22.5c.2-.3.5-.5.9-.5s.7.2.9.5l13 22.5c.2.3.2.7 0 1-.2.3-.5.5-.9.5zm-24.3-2h22.6L16 6.7 4.7 26.3z"/>
					</symbol>

					<symbol id="icon-diamond" viewbox="0 0 32 32">
						<path
							d="M27 4H5l-4 8.7 14 16.1 1 1.2 1-1.2 14-16.1L27 4zm1.2 7.5h-5l3-4.4 2 4.4zm-3.8-5.4-3.1 4.6-3.1-4.6h6.2zm-5 5.4h-6.7l3.4-5 3.3 5zm-5.6-5.4-3.1 4.6-3.1-4.6h6.2zm-8 1 3 4.4h-5l2-4.4zm-1.3 6.5H10l3.3 10.2-8.8-10.2zm11.5 12-3.9-12.1h7.8L16 25.6zm6-12H27.6l-8.8 10.2L22 13.6z"/>
					</symbol>

					<symbol id="icon-world" viewbox="0 0 32 32">
						<path d="M16 .5C7.4.5.5 7.4.5 16S7.4 31.5 16 31.5 31.5 24.6 31.5 16 24.6.5 16 .5zM7.1 7.2c.8-.8 1.6-1.4 2.5-2l-.8 2.5h2.4l2.4-2.4V4.1h-1.2l-1.2 1.2v-.9c1.5-.6 3.1-.9 4.8-.9 2.4 0 4.7.7 6.6 1.9v.1L24 6.9l-1.3 1.3-1.9-1.8h-2.4l-2.4 3 1.2 2.6 1.2-.8V10h1.2l1.3 1.1-1.3 1.3-4.8 2.4h-1.2v2.4h1.2l2.4-1.2 1.2 1.2h2.4V16l1-1.4 2.6-1V16H22v1.2h2.4l2.4 3.6 1.2-1.2v-1.2h-1.2v-1.2H28l.5-.1c-.2 2.2-1 4.3-2.2 6.1h-.8l-2.9-4.8-3 1.2-3.6-1.2-3.6 1.2-1.2 3.6 1.2 2.4h2.4l1.2-1.2 1.2 1.2v2.9c-.4 0-.8.1-1.2.1C9.1 28.5 3.5 22.9 3.5 16c0-1.2.2-2.4.5-3.6h1.2V9.6c.4-.7.9-1.4 1.4-2l.5-.4z"/>
						<path d="M13.6 10h1.2v2.4h-1.2z"/>
					</symbol>
				</defs>
			</svg>
		</>
	);
});

export default IconSelect;
