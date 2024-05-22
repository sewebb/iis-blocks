import './blocks/Preamble';
import './blocks/Info';
import './blocks/Download';
import './blocks/PostArchive';
import './blocks/Hero';
import './blocks/Button';
import './blocks/Buttons';
import './blocks/Puff';
import './blocks/Grid';
import './blocks/Column';
import './blocks/Section';
import './blocks/SectionHeader';
import './blocks/Card';
import './blocks/Testimonial';
import './blocks/Glider';
import './blocks/GliderHero';
import './blocks/Slide';
import './blocks/HeroSlide';
import './blocks/Icon';
import './blocks/News';
import './blocks/Visualization';
import './blocks/HeightLimiter';
import './blocks/Tabs';
import './blocks/Tab';

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

wp.hooks.addFilter(
	'blocks.registerBlockType',
	'custom-attributes/set-toolbar-button-attribute',
	setToolbarButtonAttribute
);
