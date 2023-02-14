import { describe, expect, it, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { QuizProvider } from "../../context/quizContext";
import QuizAnswers from "../QuizAnswers";
import React from "react";

const initialState = {
  questions: [
    {
      "category": "Science",
      "id": "622a1c377cc59eab6f9505ae",
      "correctAnswer": "Ticks and mites",
      "incorrectAnswers": [
        "The mouth and its diseases",
        "Cosmetics",
        "Schematic layouts"
      ],
      "question": "What is Acarology the study of?",
      "tags": [
        "science",
        "words"
      ],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false,
      "answers": [
        "The mouth and its diseases",
        "Cosmetics",
        "Schematic layouts",
        "Ticks and mites"
      ],
    }
  ],
  currentQuestionIndex: 0,
  currentAnswer: "",
  showResults: false,
  correctAnswersCount: 0,
  numQuestions: 3,
  categories: ["Arts & Literature"],
  quizStarted: false
};

describe("QuizAnswers component test", () => {

  beforeEach(() => {
    render(
      <QuizProvider state={initialState}>
        <QuizAnswers />
      </QuizProvider>
    )
  });

  afterEach(() => cleanup);

  it("Should show text for answer options", () => {
    expect(screen.getByText("The mouth and its diseases")).toBeInTheDocument();
    expect(screen.getByText("Cosmetics")).toBeInTheDocument();
    expect(screen.getByText("Schematic layouts")).toBeInTheDocument();
    expect(screen.getByText("Ticks and mites")).toBeInTheDocument();

  });
});