import { describe, expect, it, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { QuizProvider } from "../../context/quizContext";
import Options from "../Options";
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
        <Options />
      </QuizProvider>
    )
  });

  afterEach(() => cleanup);

  it("Should show label for no. of questions", () => {
    expect(screen.getByText("No. of Questions:asdfasdfasdf")).toBeVisible();
  });

  it("Should show label for Select a category:", () => {
    expect(screen.getByText("Select a category:")).toBeVisible();
  });

});