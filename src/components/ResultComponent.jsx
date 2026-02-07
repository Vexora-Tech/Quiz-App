import React from "react";
import quizJSON from "../API/quizJSON.json";

const ResultComponent = ({ onRestart, answer }) => {
  // Calculate score by comparing user answers with correct answers
  const score = quizJSON.reduce((total, question) => {
    return answer[question.id] === question.correctIndex ? total + 1 : total;
  }, 0);

  const totalQuestions = quizJSON.length;
  const percentage = Math.round((score / totalQuestions) * 100);

  const getResultConfig = () => {
    if (percentage >= 80) {
      return {
        message: "Excellent! You're a quiz master!",
        emoji: "🏆",
        bgColor: "bg-yellow-50",
      };
    }
    if (percentage >= 60) {
      return {
        message: "Great job! Well done!",
        emoji: "🎉",
        bgColor: "bg-green-50",
      };
    }
    if (percentage >= 40) {
      return {
        message: "Good effort! Keep practicing!",
        emoji: "👍",
        bgColor: "bg-blue-50",
      };
    }
    return {
      message: "Keep learning and try again!",
      emoji: "📚",
      bgColor: "bg-orange-50",
    };
  };

  const { message, emoji, bgColor } = getResultConfig();

  return (
    <div className="border border-zinc-300 rounded-xl p-6 md:p-12 shadow-lg max-w-2xl mx-auto bg-white">
      <div className="text-center space-y-6">
        {/* Emoji */}
        <div className="text-6xl md:text-7xl animate-bounce">{emoji}</div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-800">
          Quiz Completed!
        </h2>

        {/* Score Card */}
        <div
          className={`${bgColor} rounded-xl p-6 md:p-8 space-y-3 border-2 border-zinc-200`}
        >
          <p className="text-5xl sm:text-6xl md:text-7xl font-bold text-zinc-800">
            {score}/{totalQuestions}
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-600">
            {percentage}% Correct
          </p>
        </div>

        {/* Message */}
        <p className="text-lg sm:text-xl md:text-2xl text-zinc-700 font-medium px-4">
          {message}
        </p>

        {/* Performance Breakdown */}
        <div className="bg-zinc-50 rounded-lg p-4 md:p-6 space-y-2 text-left">
          <div className="flex justify-between items-center">
            <span className="text-sm sm:text-base text-zinc-600">
              Correct Answers:
            </span>
            <span className="text-base sm:text-lg font-semibold text-green-600">
              {score}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm sm:text-base text-zinc-600">
              Incorrect Answers:
            </span>
            <span className="text-base sm:text-lg font-semibold text-red-600">
              {totalQuestions - score}
            </span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-zinc-200">
            <span className="text-sm sm:text-base text-zinc-600">
              Total Questions:
            </span>
            <span className="text-base sm:text-lg font-semibold text-zinc-800">
              {totalQuestions}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={onRestart}
          className="w-full sm:w-auto px-8 py-3 bg-zinc-600 hover:bg-zinc-700 text-white text-lg font-semibold rounded-xl transition-all active:scale-95 shadow-md hover:shadow-lg"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ResultComponent;
