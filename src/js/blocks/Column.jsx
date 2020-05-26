const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const { PanelBody, SelectControl } = wp.components;
const {
  InspectorControls,
  InnerBlocks
} = wp.editor;

const columnWidthOptions = [
  {
    label: 'Two columns',
    value: '1/2'
  },
  {
    label: 'Three columns',
    value: '1/3'
  }
];

import './column.css';

registerBlockType('iis/column', {
  title: __('Column'),
  category: 'iis',
  icon: 'megaphone',
  keywords: [__('grid', 'iis'), __('columns', 'iis'), __('column', 'iis')],
  parent: ['iis/grid'],
  attributes: {
    columnWidth: {
      type: 'string',
      default: ''
    }
  },
  edit ({ attributes, setAttributes }) {
    const columnWidth = attributes.columnWidth

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title='Column width'>
            <SelectControl
              label='Width'
              onChange={(columnWidth) => setAttributes({ columnWidth })}
              options={[
                {
                  label: 'Choose a with',
                  value: ''
                },
                ...columnWidthOptions
              ]}
              value={columnWidth}
            />
          </PanelBody>
        </InspectorControls>
        <div className='iis-block-column'>
          <div className='iis-block-column__heading'>
            Width: {columnWidth}
          </div>
          <div class='iis-block-column__content'>
            <InnerBlocks allowedBlocks={['iis/puff']} />
          </div>
        </div>
      </Fragment>
    )
  },
  save () {
    return <InnerBlocks.Content />;
  }
});
