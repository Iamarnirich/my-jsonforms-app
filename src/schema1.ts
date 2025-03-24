
export const schema1 = {
  type: 'object',
  properties: {
    firstName: { type: 'string', minLength: 2 },
    lastName: { type: 'string' },
    age: { type: 'number' },
    email: { type: 'string', format: 'email' },
    city: { type: 'string' },
  },
  required: ['firstName', 'lastName'],
};

export const uischema1 = {
  type: 'Categorization',
  elements: [
    {
      type: 'Category',
      label: 'Identité',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/firstName',
        },
        {
          type: 'Control',
          scope: '#/properties/lastName',
        },
        {
          type: 'Control',
          scope: '#/properties/age',
        },
      ],
    },
    {
      type: 'Category',
      label: 'Contact',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/email',
        },
        {
          type: 'Control',
          scope: '#/properties/city',
        },
      ],
    },
    {
      type: 'Category',
      label: 'Divers',
      elements: [
        {
          type: 'Label',
          text: 'Ceci est une catégorie vide pour l’exemple.',
        },
      ],
    },
  ],
};

export const data1 = {
  firstName: '',
  lastName: '',
  age: null,
  email: '',
  city: '',
};
