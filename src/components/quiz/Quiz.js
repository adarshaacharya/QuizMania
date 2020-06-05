import React, { useEffect, useState } from "react";

import { Spinner } from "../../@quiz-ui/Spinner";

import { loadQuestions } from "../../helpers/QuestionsHelper";
import Question from "./Question";

class Quiz extends React.Component {
  state = {
    questions: [],
    currentQuestion: null,
    loading: true,
    score: 0,
  };

  async componentDidMount() {
    try {
      const questions = await loadQuestions();
      this.setState({ questions }, () => this.changeQuestion());
    } catch (err) {
      console.error(err);
    }
  }

  changeQuestion = (bonus = 0) => {
    // get rand index of ques
    const randomQuestionIndex = Math.floor(
      Math.random() * this.state.questions.length
    );

    // set current ques of that index
    const currentQuestion = this.state.questions[randomQuestionIndex];

    const remainingQuestions = [...this.state.questions]; // clone of ques
    remainingQuestions.splice(randomQuestionIndex, 1); // remove rand ques

    // update state
    this.setState((prevState) => ({
      questions: remainingQuestions,
      currentQuestion,
      loading: false,
      score: (prevState.score + bonus),
    }));
    console.log(this.state.score);
  };

  render() {
    if (this.state.loading) return <Spinner />;

    return (
      <>
        <Question
          currentQuestion={this.state.currentQuestion}
          changeQuestion={this.changeQuestion}
        />{" "}
      </>
    );
  }
}

export default Quiz;
