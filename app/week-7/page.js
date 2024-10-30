"use client";

import { useState } from "react";
import AddItem from "./add-item";
import ItemList from "./item-list";
import itemData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemData);

  const totalItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };
  return (
    <main>
      <AddItem onAddItem={totalItem} />
      <ItemList items={items} />
    </main>
  );
}
