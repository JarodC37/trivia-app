import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { QuizContext } from '../context/quizContext';

function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
    }

    return array;
}

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
        <div class="grid grid-cols-[500px_500px] gap-4 mt-12">
           {allOptions.map(element => {
                return (
                    <div>
                        <label class={`inline-flex col-span-8 items-center justify-between w-full p-5 text-gray-900 ${getColor(element)} border-2 border-gray-600 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 ${disabledClass} `}
                            onClick={() => dispatch({ type: "SELECT_ANSWER", payload: element})}
                        >
                            <div class="w-full text-lg font-semibold">{element}</div>
                        </label>
                    </div>
                )
            })}
                        {/* <p>{currentQuestion.correctAnswer}</p> */}

        </div>
    )
}

export default QuizAnswers;