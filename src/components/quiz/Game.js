import React, { useEffect, useState } from "react";
import Axios from "axios";

import {loadQuestions} from '../../helpers/QuestionsHelper'
import Question from "./Question";



const Game = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQues, setCurrentQues] = useState(null);

  // fetch ques from api on mount
  useEffect(() => {
    (async () => {
      try {
        const questions = await loadQuestions()
        console.log(questions)
        setQuestions(questions);
        setCurrentQues(questions[0]);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  if (!currentQues) return <p>Loading..</p>;
  console.log(currentQues);

  return (
    <>
      <Question questions={currentQues} />}{" "}
    </>
  );
};

export default Game;
