
import React, { useState } from 'react';
import { JsonFormsDispatch } from '@jsonforms/react';
import { rankWith, uiTypeIs } from '@jsonforms/core';
import { Drawer, Button, Menu } from 'antd';
import type { Categorization, Category } from '@jsonforms/core';

interface CategorizationProps {
  uischema: Categorization;
  schema: any;
  path: string;
  visible?: boolean;
}

export const DrawerCategorizationRenderer = ({ uischema, schema, path }: CategorizationProps) => {
  const categorization = uischema as Categorization;
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleClick = (index: number) => {
    setSelectedCategoryIndex(index);
    setDrawerVisible(false);
  };

  const selectedCategory = categorization.elements[selectedCategoryIndex] as Category;

  const menuItems = categorization.elements.map((cat, index) => ({
    key: String(index),
    label: cat.label,
    onClick: () => handleClick(index),
  }));

  return (
    <div>
      <Button onClick={() => setDrawerVisible(true)}>Changer de catégorie</Button>
      <Drawer
        title="Catégories"
        placement="left"
        closable={true}
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
      >
        <Menu
          selectedKeys={[String(selectedCategoryIndex)]}
          items={menuItems}
        />
      </Drawer>

      {/* Affiche le contenu de la catégorie sélectionnée */}
      {selectedCategory && (
        <JsonFormsDispatch
          uischema={selectedCategory}
          schema={schema}
          path={path}
        />
      )}
    </div>
  );
};

// Le tester est indispensable pour que JsonForms sache quand utiliser ce renderer
export const drawerCategorizationTester = rankWith(5, uiTypeIs('Categorization'));

