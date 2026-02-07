import React, { useState } from "react";
import quizJSON from "../API/quizJSON.json";

function QuizComponent({ onComplete, answer, setAnswer }) {
  const [index, setIndex] = useState(0);
  const quiz = quizJSON[index];

  const handleAnswerChange = (optionIndex) => {
    setAnswer({ ...answer, [quiz.id]: optionIndex });
  };

  return (
    <div className="border border-zinc-300 rounded-xl p-6 md:p-8 shadow-lg max-w-3xl mx-auto bg-white">
      <div className="space-y-6">
        {/* Question */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-800 text-left">
          {quiz.id}. {quiz.questionHtml}
        </h1>

        {/* Answer Options */}
        <div className="space-y-3">
          {quiz.options.map((option, i) => (
            <label
              key={i}
              htmlFor={`option-${i}`}
              className="flex items-center p-4 border-2 border-zinc-300 rounded-lg cursor-pointer hover:border-zinc-400 hover:bg-zinc-50 transition-all"
            >
              <input
                type="radio"
                name="answer"
                id={`option-${i}`}
                value={i}
                checked={answer[quiz.id] === i}
                onChange={() => handleAnswerChange(i)}
                className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-600 cursor-pointer"
              />
              <span className="ml-3 text-sm sm:text-base text-zinc-700">
                {option}
              </span>
            </label>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button
            disabled={index === 0}
            onClick={() => setIndex(index - 1)}
            className="flex-1 px-6 py-3 bg-zinc-200 hover:bg-zinc-300 text-zinc-700 font-semibold rounded-lg transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            disabled={index >= quizJSON.length - 1}
            onClick={() => setIndex(index + 1)}
            className="flex-1 px-6 py-3 bg-zinc-600 hover:bg-zinc-700 text-white font-semibold rounded-lg transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
          {index === quizJSON.length - 1 && (
            <button
              onClick={onComplete}
              className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all active:scale-95"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuizComponent;
