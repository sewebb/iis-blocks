import { addFilter } from '@wordpress/hooks';
import './editor.scss';

const enableToolbarButtonOnBlocks = [
	'core/separator',
];

const setToolbarButtonAttribute = (settings, name) => {
	// Do nothing if it's another block than our defined ones.
	if (!enableToolbarButtonOnBlocks.includes(name)) {
		return settings;
	}

	const newSettings = { ...settings };

	if (!newSettings.supports || !newSettings.supports.align) {
		return newSettings;
	}

	newSettings.supports.align.push('left');

	return newSettings;
};

addFilter(
	'blocks.registerBlockType',
	'custom-attributes/set-toolbar-button-attribute',
	setToolbarButtonAttribute
);
