// App.tsx
import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import { Drawer, Button, Typography, Divider } from 'antd';
import { schema1, uischema1, data1 } from './schema1';
import { schema2, uischema2, data2 } from './schema2';
import { drawerCategorizationTester, DrawerCategorizationRenderer } from './renderers/DrawerCategorizationRenderer';

const { Title } = Typography;

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [selectedSet, setSelectedSet] = useState(0);
  const [dataSet1, setDataSet1] = useState(data1);
  const [dataSet2, setDataSet2] = useState(data2);

  const sets = [
    {
      title: 'Formulaire 1',
      data: dataSet1,
      setData: setDataSet1,
      schema: schema1,
      uischema: uischema1,
    },
    {
      title: 'Formulaire 2',
      data: dataSet2,
      setData: setDataSet2,
      schema: schema2,
      uischema: uischema2,
    },
  ];

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  const renderers = [
    {
      tester: drawerCategorizationTester,
      renderer: DrawerCategorizationRenderer,
    },
  ];

  return (
    <div style={{ padding: '1rem' }}>
      <Button type="primary" onClick={showDrawer}>
        Ouvrir le menu
      </Button>
      <Drawer
        title="Sélectionnez un formulaire"
        placement="left"
        closable={true}
        onClose={onClose}
        open={visible}
      >
        {sets.map((set, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <Title level={5}>{set.title}</Title>
            <Button
              type={selectedSet === index ? 'default' : 'text'}
              onClick={() => {
                setSelectedSet(index);
                setVisible(false);
              }}
            >
              Charger ce formulaire
            </Button>
            <Divider />
          </div>
        ))}
      </Drawer>
      <div style={{ marginLeft: 0, marginTop: 20 }}>
        <JsonForms
          schema={sets[selectedSet].schema}
          uischema={sets[selectedSet].uischema}
          data={sets[selectedSet].data}
          renderers={renderers}
          onChange={({ data }) => sets[selectedSet].setData(data)}
        />
      </div>
    </div>
  );
};

export default App;
