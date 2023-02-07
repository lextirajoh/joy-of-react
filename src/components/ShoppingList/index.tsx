import React from 'react';
import AddNewItemForm from './AddNewItemForm';

export function ShoppingList() {
  const [items, setItems] = React.useState<Items>([]);

  function handleAddItem(input: string) {
    const newItem = {
      name: input,
      id: crypto.randomUUID(),
    };
    const nextItems = [...items, newItem];
    setItems(nextItems);
  }

  return (
    <div className="wrapper">
      <div className="list-wrapper">
        <ol className="shopping-list">
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ol>
      </div>
      <AddNewItemForm handleAddItem={handleAddItem} />
    </div>
  );
}

type Items = {
  name: string;
  id: string;
}[];
