import React, { useEffect, useState, useCallback } from "react";

import { Spinner } from "../../@quiz-ui";

import { loadQuestions } from "../../helpers/QuestionsHelper";

import Question from "./Question";
import HeadUpDisplay from "./HeadUpDisplay";
import SaveScoreForm from "./SaveScoreForm";

const Quiz = ({ history }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    loadQuestions()
      .then((questions) => setQuestions(questions))
      .catch((err) => console.error(err));

    //eslint-disable-next-line
  }, []);

  const scoreSaved = () => {
    history.push("/");
  };

  const changeQuestion = useCallback(
    (bonus = 0) => {
      // check last ques
      if (questions.length === 0) {
        setFinished(true);
        return setScore(score + bonus);
      }

      // get rand index of ques
      const randomQuestionIndex = Math.floor(Math.random() * questions.length);

      // set current ques of that index
      const currentQuestion = questions[randomQuestionIndex];

      const remainingQuestions = [...questions]; // clone of ques
      remainingQuestions.splice(randomQuestionIndex, 1); // remove rand ques

      // update state
      setQuestions(remainingQuestions);
      setCurrentQuestion(currentQuestion);
      setLoading(false);
      setScore(score + bonus);
      setQuestionNumber(questionNumber + 1);
    },
    [
      score,
      questionNumber,
      questions,
      setQuestions,
      setLoading,
      setCurrentQuestion,
      setQuestionNumber,
    ]
  );

  useEffect(() => {
    if (!currentQuestion && questions.length) {
      changeQuestion();
    }
  }, [currentQuestion, questions, changeQuestion]);

  if (loading) return <Spinner />;

  if (finished) return <SaveScoreForm score={score} scoreSaved={scoreSaved} />;

  return (
    <>
      <HeadUpDisplay score={score} questionNumber={questionNumber} />
      <Question
        currentQuestion={currentQuestion}
        changeQuestion={changeQuestion}
      />{" "}
    </>
  );
};

export default Quiz;
