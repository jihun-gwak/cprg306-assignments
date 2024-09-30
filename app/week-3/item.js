export default function Item({ name, quantity, category }) {
  return (
    <div className="p-4 m-4 bg-slate-500 w-80">
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-xl">
        Buy {quantity} in {category}
      </p>
    </div>
  );
}
