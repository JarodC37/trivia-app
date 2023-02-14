import React, { useContext } from "react"
import { QuizContext } from "../context/quizContext";

const Results = () => {
  const [quizState] = useContext(QuizContext);

  return (
    quizState.showResults ? (
      <div className="grid grid-rows-2 grid-flow-col gap-4 pt-10">       
        <p className="flex justify-center mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
            Your score is {quizState.correctAnswersCount}/{quizState.numQuestions}
        </p>
      </div>
    ) : null
  )
}

export default Results