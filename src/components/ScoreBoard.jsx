const levelNames = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

export default function ScoreBoard({ time, score, level }) {
  return (
    <div className="flex justify-between w-full mb-8 px-4 text-gray-300">
      <div className="bg-gray-800 px-4 py-2 rounded-xl font-semibold shadow-inner">
        Time Left: <span className="font-bold">{time}s</span>
      </div>
      <div className="bg-gray-800 px-4 py-2 rounded-xl font-semibold shadow-inner">
        Score: <span className="font-bold">{score}</span>
      </div>
      <div className="bg-gray-800 px-4 py-2 rounded-xl font-semibold shadow-inner">
        Level: <span className="font-bold">{levelNames[level]}</span>
      </div>
    </div>
  );
}
