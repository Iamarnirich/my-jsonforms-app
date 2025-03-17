export const schema1 = {
    type: 'object',
    properties: {
      category1: {
        type: 'object',
        properties: {
          field1: { type: 'string' },
          field2: { type: 'number' },
        },
      },
      category2: {
        type: 'object',
        properties: {
          field3: { type: 'boolean' },
          field4: { type: 'string' },
        },
      },
      category3: {
        type: 'object',
        properties: {
          field5: { type: 'string' },
          field6: { type: 'number' },
        },
      },
    },
  };
  
  export const uischema1 = {
    type: 'Categorization',
    elements: [
      {
        type: 'Category',
        label: 'Category 1',
        elements: [
          { type: 'Control', scope: '#/properties/category1/properties/field1' },
          { type: 'Control', scope: '#/properties/category1/properties/field2' },
        ],
      },
      {
        type: 'Category',
        label: 'Category 2',
        elements: [
          { type: 'Control', scope: '#/properties/category2/properties/field3' },
          { type: 'Control', scope: '#/properties/category2/properties/field4' },
        ],
      },
      {
        type: 'Category',
        label: 'Category 3',
        elements: [
          { type: 'Control', scope: '#/properties/category3/properties/field5' },
          { type: 'Control', scope: '#/properties/category3/properties/field6' },
        ],
      },
    ],
  };
  
  export const data1 = {
    category1: { field1: 'Hello', field2: 42 },
    category2: { field3: true, field4: 'World' },
    category3: { field5: 'Foo', field6: 123 },
  };