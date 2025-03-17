import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import { materialRenderers } from '@jsonforms/material-renderers';
import { Drawer, Button } from 'antd';
import { schema1, uischema1, data1 } from './schema1';
import { schema2, uischema2, data2 } from './schema2';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [dataSet1, setDataSet1] = useState(data1);
  const [dataSet2, setDataSet2] = useState(data2);

  const sets = [
    {
      title: 'Set 1',
      data: dataSet1,
      setData: setDataSet1,
      schema: schema1,
      categories: uischema1.elements,
    },
    {
      title: 'Set 2',
      data: dataSet2,
      setData: setDataSet2,
      schema: schema2,
      categories: uischema2.elements,
    },
  ];

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  const handleCategoryClick = (category: any, set: any) => {
    setSelectedCategory({ category, set });
  };

  return (
    <div>
      <Button type="primary" onClick={showDrawer}>
        Ouvrir le Drawer
      </Button>
      <Drawer
        title="Catégories"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        {sets.map((set, setIndex) => (
          <div key={setIndex}>
            <h3>{set.title}</h3>
            <ul>
              {set.categories.map((category, categoryIndex) => (
                <li
                  key={categoryIndex}
                  onClick={() => handleCategoryClick(category, set)}
                  style={{ cursor: 'pointer' }}
                >
                  {category.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Drawer>
      <div style={{ marginLeft: 200 }}>
        {selectedCategory && (
          <JsonForms
            schema={selectedCategory.set.schema}
            uischema={selectedCategory.category}
            data={selectedCategory.set.data}
            renderers={materialRenderers}
            onChange={({ data }) => selectedCategory.set.setData(data)}
          />
        )}
      </div>
    </div>
  );
};

export default App;
