import Link from "next/link";
import ShoppingList from "./week-2/page";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl">CPRG 306: Web Development 2 - Assignments</h1>
      <ShoppingList />
    </main>
  );
}
