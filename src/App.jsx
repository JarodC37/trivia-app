import { QuizProvider } from './context/quizContext'
import Quiz from './components/Quiz'
import Options from './components/Options'
import Results from './components/Results'

function App() {
  return (
    <div class="container mx-auto">
      <QuizProvider>
        <div class="flex justify-center mx-auto pt-6 pb-6">
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-orange-900 md:text-5xl lg:text-6xl dark:text-white">
            Trivia App
            </h1>
        </div>
        <div class="bg-white opacity-70 rounded-lg">
          <Options />
          <Quiz />
          <Results />
        </div>
      </QuizProvider>
    </div>
  )
}

export default App
