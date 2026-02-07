import React, { useState } from "react";
import QuizComponent from "./components/QuizComponent";
import WelcomeComponent from "./components/WelcomeComponent";
import ResultComponent from "./components/ResultComponent";

function App() {
  const [quizState, setQuizState] = useState("welcome");
  const [answer, setAnswer] = useState({});

  const handleRestart = () => {
    setQuizState("welcome");
    setAnswer({});
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {quizState === "welcome" && (
        <WelcomeComponent onStart={() => setQuizState("quiz")} />
      )}
      {quizState === "quiz" && (
        <QuizComponent
          onComplete={() => setQuizState("result")}
          answer={answer}
          setAnswer={setAnswer}
        />
      )}
      {quizState === "result" && (
        <ResultComponent onRestart={handleRestart} answer={answer} />
      )}
    </div>
  );
}

export default App;
