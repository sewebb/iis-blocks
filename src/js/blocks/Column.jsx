const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { PanelBody, SelectControl } = wp.components;
const {
  InspectorControls,
  InnerBlocks
} = wp.editor;

import './grid.css';
import './column.css';

const COLUMN_WIDTH_OPTIONS = [
  {
    label: 'Two columns',
    value: '1/2'
  },
  {
    label: 'Three columns',
    value: '1/3'
  }
];

registerBlockType('iis/column', {
  title: __('Column'),
  category: 'iis',
  icon: 'megaphone',
  keywords: [__('grid', 'iis'), __('columns', 'iis'), __('column', 'iis')],
  parent: ['iis/grid'],
  attributes: {
    columnWidth: {
      type: 'string',
      default: '1/3'
    }
  },
  edit({ attributes, setAttributes }) {
    const columnWidth = attributes.columnWidth

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title="Column width">
            <SelectControl
              label="Width"
              onChange={(columnWidth) => setAttributes({ columnWidth })}
              options={[
                {
                  label: "Choose column width...",
                  value: "",
                },
                ...COLUMN_WIDTH_OPTION,
              ]}
              value={columnWidth}
            />
          </PanelBody>
        </InspectorControls>
        <div className="iis-block-column">
          <strong>Column width: {columnWidth}</strong>
          <div class="iis-block-column__content">
            <InnerBlocks allowedBlocks={['iis/puff']} />
          </div>
        </div>
      </Fragment>
    );
  },
  save() {
    return <InnerBlocks.Content />;
  },
});
