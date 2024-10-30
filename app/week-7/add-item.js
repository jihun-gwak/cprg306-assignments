"use client";

import { useState } from "react";
import NewItem from "./item-quantity";

export default function AddItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      name,
      quantity,
      category,
    };

    onAddItem(newItem);
    setQuantity(1);
    setName("");
    setCategory("Produce");
  };

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <main>
      <div className="bg-slate-500 p-8 rounded-lg shadow-lg w-full max-w-md">
        <NewItem
          increment={increment}
          currentQuantity={quantity}
          decrement={decrement}
        />
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <input
              type="text"
              placeholder="Item name"
              value={name}
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-blue-500 text-gray-950"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-blue-500 text-gray-950"
              required
            >
              <option value="">Select a category</option>
              <option value="Produce">Produce</option>
              <option value="Dairy">Dairy</option>
              <option value="Bakery">Bakery</option>
              <option value="Meat">Meat</option>
              <option value="Frozen Foods">Frozen Foods</option>
              <option value="Canned Goods">Canned Goods</option>
              <option value="Dry Goods">Dry Goods</option>
              <option value="Beverages">Beverages</option>
              <option value="Snacks">Snacks</option>
              <option value="Household">Household</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
