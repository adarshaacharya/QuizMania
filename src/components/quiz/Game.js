import React, { useEffect, useState } from "react";

import { Spinner } from "../../@quiz-ui/Spinner";

import { loadQuestions } from "../../helpers/QuestionsHelper";
import Question from "./Question";

const Game = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQues, setCurrentQues] = useState(null);
  const [loading, setLoading] = useState(true);

  // fetch ques from api on mount
  useEffect(() => {
    (async () => {
      try {
        const questions = await loadQuestions();
        setQuestions(questions);
        setCurrentQues(questions[0]);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  if (loading) return <Spinner />;
  console.log(currentQues);

  return (
    <>
      <Question questions={currentQues} />{" "}
    </>
  );
};

export default Game;
