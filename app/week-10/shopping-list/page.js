"use client";

import { useEffect, useState } from "react";
import AddItem from "./add-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();

  const totalItem = async (newItem) => {
    if (user) {
      const id = await addItem(newItem, user.uid);
      setItems((prevItems) => [...prevItems, { ...newItem, id }]);
    }
  };

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName
      .split(",")[0]
      .replace(
        /[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\u2011-\u26FF|\uD83E[\uDD10-\uDDFF]/g,
        ""
      )
      .trim();

    setSelectedItemName(cleanedName);
  };

  async function loadItems() {
    if (user) {
      const items = await getItems({ userId: user.uid });
      setItems(items);
    }
  }

  useEffect(() => {
    loadItems();
  }, [user]);

  return (
    user ?? (
      <main className="flex">
        <div>
          <h1 className="text-4xl py-4 pl-4 font-extrabold">Shopping List</h1>
          <AddItem onAddItem={totalItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="flex-1 p-4">
          <h1 className="text-3xl font-extrabold">Meal Ideas</h1>
          {selectedItemName ? (
            <MealIdeas ingredient={selectedItemName} />
          ) : (
            <h2>Select an item to see meal ideas</h2>
          )}
        </div>
      </main>
    )
  );
}
