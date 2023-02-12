import React, { useContext } from 'react'
import { QuizContext } from '../context/quizContext';
import QuizAnswers from './QuizAnswers';

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    quizState.quizStarted ? (
      <div class="flex flex-col items-center justify-center pt-3" >
        <h2 class="text-center p-5 text-xl">
          Question {quizState.currentQuestionIndex + 1}/{quizState.questions.length}
        </h2>

        <h1 class="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
          {quizState.questions[quizState.currentQuestionIndex].question}
        </h1>


        <br />
        <QuizAnswers />

        {
          quizState.currentAnswer ?
            (<button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              class="inline-block w-40 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}
            >
              Next
            </button>
            ) : (
              <button 
                type="button"
                class="inline-block w-40 px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded"
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