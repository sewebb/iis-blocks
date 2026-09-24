import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType(metadata, {
	getEditWrapperProps(attributes) {
		return attributes.align ? { 'data-align': attributes.align } : {};
	},
	edit: Edit,
	save,
});
