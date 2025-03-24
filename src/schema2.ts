
export const schema2 = {
  type: 'object',
  properties: {
    school: { type: 'string' },
    degree: { type: 'string' },
    year: { type: 'number' },
    github: { type: 'string' },
  },
};

export const uischema2 = {
  type: 'Categorization',
  elements: [
    {
      type: 'Category',
      label: 'Éducation',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/school',
        },
        {
          type: 'Control',
          scope: '#/properties/degree',
        },
        {
          type: 'Control',
          scope: '#/properties/year',
        },
      ],
    },
    {
      type: 'Category',
      label: 'En ligne',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/github',
        },
      ],
    },
  ],
};

export const data2 = {
  school: '',
  degree: '',
  year: null,
  github: '',
};
