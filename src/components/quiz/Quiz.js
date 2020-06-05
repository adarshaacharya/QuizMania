import React, { useEffect, useState } from "react";

import { Spinner } from "../../@quiz-ui/Spinner";

import { loadQuestions } from "../../helpers/QuestionsHelper";
import Question from "./Question";
import HeadUpDisplay from "./HeadUpDisplay";
class Quiz extends React.Component {
  state = {
    questions: [],
    currentQuestion: null,
    loading: true,
    score: 0,
    questionNumber: 0,
    finished: false,
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
    if (this.state.questions.length === 0) {
      return this.setState({ finished: true });
    }

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
      score: prevState.score + bonus,
      questionNumber: prevState.questionNumber + 1,
    }));
  };

  render() {
    if (this.state.loading) return <Spinner />;

    if (this.state.finished) return <h1>DONE SEXY BOII!! 💯🔥</h1>;
    return (
      <>
        <HeadUpDisplay
          score={this.state.score}
          questionNumber={this.state.questionNumber}
        />
        <Question
          currentQuestion={this.state.currentQuestion}
          changeQuestion={this.changeQuestion}
        />{" "}
      </>
    );
  }
}

export default Quiz;
