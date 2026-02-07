import React from "react";

function QuizComponent() {
  return (
    <>
      <div className="border border-zinc-300 rounded-xl p-6 md:p-8 shadow-lg max-w-3xl mx-auto bg-white">
        <div className="space-y-6">
          {/* Question */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-800 text-left">
            What is HTML?
          </h1>

          {/* Answer Options */}
          <div className="space-y-3">
            <label
              htmlFor="1"
              className="flex items-center p-4 border-2 border-zinc-300 rounded-lg cursor-pointer hover:border-zinc-400 hover:bg-zinc-50 transition-all"
            >
              <input
                type="radio"
                name="answer"
                id="1"
                value="1"
                className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-600 cursor-pointer"
              />
              <span className="ml-3 text-sm sm:text-base text-zinc-700">
                Answer 1
              </span>
            </label>

            <label
              htmlFor="2"
              className="flex items-center p-4 border-2 border-zinc-300 rounded-lg cursor-pointer hover:border-zinc-400 hover:bg-zinc-50 transition-all"
            >
              <input
                type="radio"
                name="answer"
                id="2"
                value="2"
                className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-600 cursor-pointer"
              />
              <span className="ml-3 text-sm sm:text-base text-zinc-700">
                Answer 2
              </span>
            </label>

            <label
              htmlFor="3"
              className="flex items-center p-4 border-2 border-zinc-300 rounded-lg cursor-pointer hover:border-zinc-400 hover:bg-zinc-50 transition-all"
            >
              <input
                type="radio"
                name="answer"
                id="3"
                value="3"
                className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-600 cursor-pointer"
              />
              <span className="ml-3 text-sm sm:text-base text-zinc-700">
                Answer 3
              </span>
            </label>

            <label
              htmlFor="4"
              className="flex items-center p-4 border-2 border-zinc-300 rounded-lg cursor-pointer hover:border-zinc-400 hover:bg-zinc-50 transition-all"
            >
              <input
                type="radio"
                name="answer"
                id="4"
                value="4"
                className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-600 cursor-pointer"
              />
              <span className="ml-3 text-sm sm:text-base text-zinc-700">
                Answer 4
              </span>
            </label>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button className="flex-1 px-6 py-3 bg-zinc-200 hover:bg-zinc-300 text-zinc-700 font-semibold rounded-lg transition-all active:scale-95">
              Previous
            </button>
            <button className="flex-1 px-6 py-3 bg-zinc-600 hover:bg-zinc-700 text-white font-semibold rounded-lg transition-all active:scale-95">
              Next
            </button>
            <button className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all active:scale-95">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuizComponent;
