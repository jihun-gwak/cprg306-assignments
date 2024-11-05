export default function Item({ name, quantity, category, onSelect }) {
  return (
    <div
      onClick={() => onSelect(name)}
      className={`p-4 m-4 bg-slate-500 w-80 rounded-md shadow-lg hover:bg-blue-600 transition duration-200`}
    >
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-xl">
        Buy {quantity} in {category}
      </p>
    </div>
  );
}
