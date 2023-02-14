import React, { createContext, useReducer } from "react";

const initialState = {
  questions: [{}],
  currentQuestionIndex: 0,
  currentAnswer: "",
  showResults: false,
  correctAnswersCount: 0,
  numQuestions: 3,
  categories: ["Arts & Literature"],
  quizStarted: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ON_START": {
      return {
        ...state,
        questions: action.questions, 
        numQuestions: action.numQuestions,
        categories: action.categories,
        quizStarted: true,
        showResults: false,
        correctAnswersCount: 0,
        currentQuestionIndex: 0,
      }
    }
    case "SELECT_ANSWER": {
      const correctAnswersCount =
        action.payload ===
          state.questions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswersCount + 1
          : state.correctAnswersCount;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswersCount,
      };
    }
    case "NEXT_QUESTION": {
      const currentQuestionIndex = state.currentQuestionIndex === state.numQuestions -1
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
        const showResults = state.currentQuestionIndex === state.questions.length - 1;
        console.log(state)
        console.log("🚀 ~ file: quizContext.jsx:45 ~ reducer ~ state", state)
        return {
          ...state,
          currentQuestionIndex,
          currentAnswer: "",
          showResults: showResults,
          quizStarted: showResults ? false : true
        }

    }
    case "RESTART": {
      return initialState;
    }
    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children, state=initialState }) => {
  const value = useReducer(reducer, state);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};