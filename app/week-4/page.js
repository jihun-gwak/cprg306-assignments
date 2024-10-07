"use client";

import { useState } from "react";
import NewItem from "./new-item";

export default function Page() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <main className="bg-white w-40 h-12 ">
      <NewItem
        increment={increment}
        currentQuantity={quantity}
        decrement={decrement}
      />
    </main>
  );
}
