import { InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	if (attributes.button) {
		return <InnerBlocks.Content />;
	}

	return null;
}
