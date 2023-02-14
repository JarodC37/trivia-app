import React, { useState, useContext } from "react";
import { QuizContext } from "../context/quizContext";
import axios from "axios";


const categories = {
  "Arts & Literature": "arts_and_literature",
  "Film & TV": "film_and_tv",
  "Food & Drink": "food_and_drink",
  "General Knowledge": "general_knowledge",
  "Geography": "geography",
  "History": "history",
  "Music": "music",
  "Science": "science",
  "Society & Culture": "society_and_culture",
  "Sport & Leisure": "sport_and_leisure"
};
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

function Options() {
  const [quizState, dispatch] = useContext(QuizContext);

  const [questionLength, setQuestionLength] = useState(3);
  const [category, setCategory] = useState("Arts & Literature");

  const handleLengthChange = (event) => {
    setQuestionLength(event.target.value)
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const getQuestions = () => {
    axios.get(`https://the-trivia-api.com/api/questions?limit=${questionLength}&categories=${categories[category]}`)
      .then(res => {
        res.data.map(element => {
          element.answers = shuffle([element.correctAnswer, ...element.incorrectAnswers])
        });
        dispatch({
          type: "ON_START",
          questions: res.data,
          numQuestions: questionLength,
          categories: [category]
        });
      })
  }

  return (
    !quizState.quizStarted &&
        <div className="grid grid-rows-2 grid-flow-col gap-4 py-4 text-xl justify-center">
          <div className="flex justify-center">
            <label className="px-4">
              <text>No. of Questions:   </text>
              <select
                className="bg-gray-50 border border-stone-400 text-gray-900 text-sm rounded-lg focus:ring-amber-700 focus:border-amber-700 w-auto p-2"
                data-testid="questionNum-selector"
                value={questionLength}
                onChange={handleLengthChange}
              >
                {Array.from({ length: 18 }, (_, i) => (
                  <option key={i + 3} value={i + 3}>{i + 3}</option>
                ))}
              </select>
            </label>
            <label className="px-4">
              <text>Select a category:   </text>
              <select
                className="bg-gray-50 border border-stone-400 text-gray-900 text-sm rounded-lg focus:ring-amber-700 focus:border-amber-700 w-auto p-2"
                data-testid="category-selector"
                value={category}
                onChange={handleCategoryChange}
              >
                {Object.keys(categories).map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="flex justify-center">
            <button className="bg-orange-300 hover:bg-orange-500 text-orange-900 font-semibold hover:text-white py-2 px-4 border border-stone-400 hover:border-transparent rounded"
              onClick={getQuestions}>
                    Start!
            </button>
          </div>
        </div>
  )
}

export default Options;
