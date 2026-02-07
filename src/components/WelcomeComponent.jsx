import React from "react";

function WelcomeComponent({ onStart }) {
  return (
    <>
      <div className="border border-zinc-300 rounded-xl p-6 md:p-12 shadow-lg max-w-2xl mx-auto">
        <div className="text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-800">
            Welcome To The Quiz 🤩
          </h1>
          <p className="text-zinc-600 text-sm sm:text-base">
            Test your knowledge and have fun!
          </p>
          <button
            onClick={onStart}
            className="bg-zinc-600 hover:bg-zinc-700 active:scale-95 transition-all text-white text-lg sm:text-xl md:text-2xl px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg w-full sm:w-auto min-w-40"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </>
  );
}

export default WelcomeComponent;
