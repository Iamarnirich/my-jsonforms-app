export const schema2 = {
    type: 'object',
    properties: {
      categoryA: {
        type: 'object',
        properties: {
          fieldA: { type: 'string' },
          fieldB: { type: 'number' },
        },
      },
      categoryB: {
        type: 'object',
        properties: {
          fieldC: { type: 'boolean' },
          fieldD: { type: 'string' },
        },
      },
    },
  };
  
  export const uischema2 = {
    type: 'Categorization',
    elements: [
      {
        type: 'Category',
        label: 'Category A',
        elements: [
          { type: 'Control', scope: '#/properties/categoryA/properties/fieldA' },
          { type: 'Control', scope: '#/properties/categoryA/properties/fieldB' },
        ],
      },
      {
        type: 'Category',
        label: 'Category B',
        elements: [
          { type: 'Control', scope: '#/properties/categoryB/properties/fieldC' },
          { type: 'Control', scope: '#/properties/categoryB/properties/fieldD' },
        ],
      },
    ],
  };
  
  export const data2 = {
    categoryA: { fieldA: 'Bar', fieldB: 456 },
    categoryB: { fieldC: false, fieldD: 'Baz' },
  };