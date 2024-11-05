"use client";

import { useState } from "react";
import AddItem from "./add-item";
import ItemList from "./item-list";
import itemData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const totalItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main>
      <h1 className="text-4xl py-4 pl-4 font-extrabold">Shopping List</h1>
      <AddItem onAddItem={totalItem} />
      <ItemList items={items} onItemSelect={handleItemSelect} />
      {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
    </main>
  );
}
