import {describe, expect, it, beforeEach} from "vitest";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import { QuizProvider } from "../../context/quizContext";
import Results from "../Results";
import React from "react";

const initialState = {
  questions: [{}],
  currentQuestionIndex: 0,
  currentAnswer: "",
  showResults: true,
  correctAnswersCount: 2,
  numQuestions: 3,
  categories: ["Arts & Literature"],
  quizStarted: false
};

describe("Results component test", () => {

  beforeEach(() => {
    render(
      <QuizProvider state={initialState}>
        <Results></Results>
      </QuizProvider>
    )
  })

  it("Should show results message", ()=> {
    expect(screen.getByText("Your score is 2/3")).toBeVisible();
  })

});