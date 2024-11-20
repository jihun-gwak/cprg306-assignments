export default function ItemQuantity({
  increment,
  decrement,
  currentQuantity,
}) {
  return (
    <div className="flex items-center justify-between bg-white rounded-md mt-3 shadow-md box-border h-10">
      <p className="text-black text-xl font-bold px-4">{currentQuantity}</p>
      <div className="space-x-2 px-3">
        <button
          className={`bg-blue-700 text-white px-3 rounded-md shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ${
            currentQuantity < 2
              ? "opacity-50 bg-gray-500 cursor-not-allowed"
              : ""
          }`}
          onClick={decrement}
          disabled={currentQuantity < 2}
        >
          -
        </button>
        <button
          className={`bg-blue-700 text-white px-3 rounded-md shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ${
            currentQuantity > 19 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={increment}
          disabled={currentQuantity > 19}
        >
          +
        </button>
      </div>
    </div>
  );
}
