"use client";

import Item from "./item";
import { useState } from "react";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortByCategory = () => {
    setSortBy("category");
  };

  const sortByName = () => {
    setSortBy("name");
  };

  const groupByCategory = () => {
    setSortBy("grouped");
  };

  const displayItems = () => {
    if (sortBy === "grouped") {
      const grouped = items.reduce((acc, item) => {
        const category = item.category;

        if (!acc[category]) {
          acc[category] = [];
        }

        acc[category].push(item);
        return acc;
      }, {});

      const sortedGrouped = Object.keys(grouped)
        .sort()
        .reduce((acc, key) => {
          acc[key] = grouped[key].sort((a, b) => a.name.localeCompare(b.name));
          return acc;
        }, {});

      return Object.keys(sortedGrouped).map((category) => (
        <div key={category}>
          <h2 className="text-2xl font-bold capitalize">{category}</h2>
          <ul>
            {sortedGrouped[category].map((item) => (
              <li key={item.id}>
                <Item
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                  onSelect={onItemSelect}
                />
              </li>
            ))}
          </ul>
        </div>
      ));
    } else {
      const sortedData = [...items].sort((a, b) => {
        const valueA = a[sortBy].toUpperCase();
        const valueB = b[sortBy].toUpperCase();
        return valueA.localeCompare(valueB);
      });

      return sortedData.map((item) => (
        <li key={item.id}>
          <Item
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={onItemSelect}
          />
        </li>
      ));
    }
  };

  return (
    <div>
      <div className="flex items-center ml-4">
        <p className="text-lg">Sort by: </p>
        <button
          type="button"
          className={`${
            sortBy === "name" ? "bg-sky-500" : "bg-sky-900"
          } overflow-hidden px-8 py-2 m-5`}
          onClick={sortByName}
        >
          Name
        </button>
        <button
          type="button"
          className={`${
            sortBy === "category" ? "bg-sky-500" : "bg-sky-900"
          } overflow-hidden px-8 py-2 m-5`}
          onClick={sortByCategory}
        >
          Category
        </button>
        <button
          type="button"
          className={`${
            sortBy === "grouped" ? "bg-sky-500" : "bg-sky-900"
          } overflow-hidden px-8 py-2 m-5`}
          onClick={groupByCategory}
        >
          Grouped by Category
        </button>
      </div>
      <ul>{displayItems()}</ul>
    </div>
  );
}
