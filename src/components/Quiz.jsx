import React, { useContext } from "react"
import { QuizContext } from "../context/quizContext";
import QuizAnswers from "./QuizAnswers";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    quizState.quizStarted ? (
      <div className="flex flex-col items-center justify-center pt-3" >
        <p className="text-center p-5 text-xl">
          Question {quizState.currentQuestionIndex + 1}/{quizState.questions.length}
        </p>

        <p className="mb-4 mx-8 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
          {quizState.questions[quizState.currentQuestionIndex].question}
        </p>


        <br />
        <QuizAnswers />

        {
          quizState.currentAnswer ?
            (<button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block w-40 my-4 px-6 py-2.5 bg-orange-300 hover:bg-orange-500 text-orange-900 border-stone-400 hover:text-white font-semibold text-s leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out"
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}
            >
              Next
            </button>
            ) : (
              <button 
                type="button"
                className="inline-block w-40 my-4 px-6 py-2.5 text-white text-s leading-tight uppercase rounded font-semibold text-s"
                style={{pointerEvents: "none"}}>
                &nbsp;
              </button>
            )
        }
        <br />
      </div >

    ) : null
  )
}

export default Quiz;