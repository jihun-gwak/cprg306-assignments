export default function ItemQuantity({
  increment,
  decrement,
  currentQuantity,
}) {
  return (
    <div className="flex items-center justify-center space-x-4 bg-slate-300 rounded-xl p-6 shadow-md">
      <p className="text-black text-3xl font-bold">{currentQuantity}</p>
      <button
        className={`bg-blue-700 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ${
          currentQuantity < 2 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={decrement}
        disabled={currentQuantity < 2}
      >
        -
      </button>
      <button
        className={`bg-blue-700 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ${
          currentQuantity > 19 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={increment}
        disabled={currentQuantity > 19}
      >
        +
      </button>
    </div>
  );
}
