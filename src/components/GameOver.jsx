export default function GameOver({ score, onRestart }) {
  return (
    <div className="text-center text-gray-100">
      <h2 className="text-4xl font-extrabold text-red-500 mb-6">Time's up!</h2>
      <p className="text-2xl mb-8">Your final score: <span className="font-bold">{score}</span></p>
      <button
        onClick={onRestart}
        className="bg-indigo-700 hover:bg-indigo-900 text-white py-3 px-10 rounded-3xl text-xl font-semibold shadow-md transition-transform transform hover:scale-105"
      >
        Play Again
      </button>
    </div>
  );
}
