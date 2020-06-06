import React, { useEffect, useState } from "react";

import { Spinner } from "../../@quiz-ui";

import { loadQuestions } from "../../helpers/QuestionsHelper";

import Question from "./Question";
import HeadUpDisplay from "./HeadUpDisplay";
import SaveScoreForm from "./SaveScoreForm";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      currentQuestion: null,
      loading: true,
      score: 0,
      questionNumber: 0,
      finished: false,
    };
  }

  async componentDidMount() {
    try {
      const questions = await loadQuestions();
      this.setState({ questions }, () => this.changeQuestion());
    } catch (err) {
      console.error(err);
    }
  }

  scoreSaved = () => {
    this.props.history.push("/");
  };

  changeQuestion = (bonus = 0) => {
    if (this.state.questions.length === 0) {
      return this.setState((prevState) => ({
        finished: true,
        score: prevState.score + bonus,
      }));
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
    const {
      loading,
      finished,
      score,
      currentQuestion,
      questionNumber,
    } = this.state;

    if (loading) return <Spinner />;

    if (finished) return <SaveScoreForm score={score} scoreSaved={this.scoreSaved}/>;

    return (
      <>
        <HeadUpDisplay score={score} questionNumber={questionNumber} />
        <Question
          currentQuestion={currentQuestion}
          changeQuestion={this.changeQuestion}
        />{" "}
      </>
    );
  }
}

export default Quiz;
