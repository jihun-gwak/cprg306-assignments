"use client";

import Item from "./item";
import { useState } from "react";
import data from "./items.json";

export default function ItemList() {
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
      const grouped = data.reduce((acc, item) => {
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
                />
              </li>
            ))}
          </ul>
        </div>
      ));
    } else {
      const sortedData = [...data].sort((a, b) => {
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
          />
        </li>
      ));
    }
  };

  return (
    <main>
      <div>
        <button
          type="button"
          className={`${
            sortBy === "name" ? "bg-green" : "bg-sky-500"
          } overflow-hidden p-4 m-5`}
          onClick={sortByName}
        >
          Name
        </button>
        <button
          type="button"
          className={`${
            sortBy === "category" ? "bg-green" : "bg-sky-500"
          } overflow-hidden p-4 m-5`}
          onClick={sortByCategory}
        >
          Category
        </button>
        <button
          type="button"
          className={`${
            sortBy === "grouped" ? "bg-green" : "bg-sky-500"
          } overflow-hidden p-4 m-5`}
          onClick={groupByCategory}
        >
          Grouped by Category
        </button>
      </div>
      <h1 className="text-4xl font-extrabold">Shopping List</h1>
      <ul>{displayItems()}</ul>
    </main>
  );
}
