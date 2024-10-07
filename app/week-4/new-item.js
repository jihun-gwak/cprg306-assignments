export default function NewItem({ increment, decrement, currentQuantity }) {
  return (
    <div className="flex items-center justify-center space-x-4">
      <p className="text-black text-2xl font-semibold">{currentQuantity}</p>
      <button
        className={`bg-blue-700 text-white p-3 rounded-3xl shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
          currentQuantity < 2 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={decrement}
        disabled={currentQuantity < 2}
      >
        -
      </button>
      <button
        className={`bg-blue-700 text-white p-3 rounded-3xl shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
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
