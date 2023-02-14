import React from "react"
import { QuizProvider } from "./context/quizContext"
import Quiz from "./components/Quiz"
import Options from "./components/Options"
import Results from "./components/Results"

function App() {
  return (
    <div className="container mx-auto">
      <QuizProvider>
        <div className="flex justify-center mx-auto pt-6 pb-6">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-orange-900 md:text-5xl lg:text-6xl dark:text-white">
            Trivia Appssssssss
          </h1>
        </div>
        <div className="bg-white bg-opacity-80 rounded-lg">
          <Options />
          <Quiz />
          <Results />
        </div>
      </QuizProvider>
    </div>
  )
}

export default App
