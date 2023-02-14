import React, { useContext } from "react"
import { QuizContext } from "../context/quizContext";

function QuizAnswers() {
  const [quizState, dispatch] = useContext(QuizContext);

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  const allOptions = (currentQuestion.answers);

  const disabledClass = quizState.currentAnswer ? "pointer-events-none" : "";

  const getColor = (element) => {
    if (!quizState.currentAnswer) {
      // when no answer selected all return white
      return "bg-gray-100"
    } 
    if (quizState.currentAnswer === element){
      // if element selected and is wrong, return red
      if (quizState.currentAnswer !== currentQuestion.correctAnswer) {
        return "bg-red-300"
      }

      // if element selected and is correct, return green
      return "bg-green-300"
    }
    return currentQuestion.correctAnswer === element ? "bg-green-300" : "bg-gray-100"
  }
  return (
    <div className="grid grid-cols-[500px_500px] gap-4 mt-12">
      {allOptions.map(element => {
        return (
          <div key={element}>
            <label className={`inline-flex col-span-8 items-center justify-between w-full p-5 text-gray-900 ${getColor(element)} border-2 border-gray-600 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 ${disabledClass} `}
              onClick={() => dispatch({ type: "SELECT_ANSWER", payload: element})}
            >
              <div className="w-full text-lg font-semibold">{element}</div>
            </label>
          </div>
        )
      })}
    </div>
  )
}

export default QuizAnswers;