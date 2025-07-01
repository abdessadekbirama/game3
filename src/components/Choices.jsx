export default function Choices({ options, onSelect }) {
  return (
    <div className="grid grid-cols-3 gap-6 w-full px-8">
      {options.map((opt, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(opt)}
          className="bg-gradient-to-r from-indigo-700 to-purple-800 text-white text-xl font-semibold py-4 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300"
          type="button"
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
