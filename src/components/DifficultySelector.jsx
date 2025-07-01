export default function DifficultySelector({ onSelect }) {
  return (
    <div className="w-full text-center">
      <h2 className="text-3xl font-extrabold text-gray-100 mb-8">
        Choose Difficulty
      </h2>
      <div className="flex justify-center gap-6">
        <button
          onClick={() => onSelect("easy")}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-transform transform hover:scale-105"
        >
          Easy
        </button>
        <button
          onClick={() => onSelect("medium")}
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-transform transform hover:scale-105"
        >
          Medium
        </button>
        <button
          onClick={() => onSelect("hard")}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-transform transform hover:scale-105"
        >
          Hard
        </button>
      </div>
    </div>
  );
}
