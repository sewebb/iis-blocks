import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './edit';
import save from './save';
import '../hero/editor.css';

registerBlockType(metadata, {
	getEditWrapperProps() {
		return { 'data-align': 'full' };
	},
	edit: Edit,
	save,
});
