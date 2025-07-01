import { useState, useEffect } from "react";
import Question from "./components/Question";
import Choices from "./components/Choices";
import ScoreBoard from "./components/ScoreBoard";
import GameOver from "./components/GameOver";
import DifficultySelector from "./components/DifficultySelector";

const generateQuestion = (level) => {
  const rand = (n) => Math.floor(Math.random() * n);
  let a, b, operator, answer;

  switch (level) {
    case "easy":
      a = rand(10);
      b = rand(10);
      operator = "+";
      answer = a + b;
      break;
    case "medium":
      a = rand(20);
      b = rand(20);
      operator = Math.random() > 0.5 ? "+" : "-";
      answer = operator === "+" ? a + b : a - b;
      break;
    case "hard":
      a = rand(50);
      b = rand(50);
      const ops = ["+", "-", "*"];
      operator = ops[rand(3)];
      answer = operator === "+" ? a + b : operator === "-" ? a - b : a * b;
      break;
    default:
      a = 0;
      b = 0;
      operator = "+";
      answer = 0;
  }

  const options = [answer, answer + rand(5) + 1, answer - (rand(5) + 1)].sort(
    () => 0.5 - Math.random()
  );

  return { a, b, operator, answer, options };
};

export default function App() {
  const [level, setLevel] = useState(null);
  const [question, setQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (level) {
      setQuestion(generateQuestion(level));
      setScore(0);
      setTimeLeft(30);
      setIsGameOver(false);
    }
  }, [level]);

  useEffect(() => {
    if (!level || isGameOver) return;
    if (timeLeft === 0) {
      setIsGameOver(true);
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, level, isGameOver]);

  const handleAnswer = (choice) => {
    if (!question) return;
    if (choice === question.answer) {
      setScore((prev) => prev + 1);
    }
    setQuestion(generateQuestion(level));
  };

  const restart = () => setLevel(null);

  return (
    <div className="min-h-screen flex-col gap-5 bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-6 text-gray-200">
      <img className="size-32 animate-bounce"  src="images/logo.png" alt="" />
      <div className="bg-gray-900 bg-opacity-90 rounded-3xl shadow-2xl max-w-md w-full p-8 flex flex-col items-center">
        {!level ? (
          <DifficultySelector onSelect={setLevel} />
        ) : isGameOver ? (
          <GameOver score={score} onRestart={restart} />
        ) : (
          <>
            <ScoreBoard time={timeLeft} score={score} level={level} />
            {question && (
              <>
                <Question
                  a={question.a}
                  b={question.b}
                  operator={question.operator}
                />
                <Choices options={question.options} onSelect={handleAnswer} />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
