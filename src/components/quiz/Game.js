import React, { useEffect, useState } from "react";

import openTrivia from "../../api/openTrivia";
import Question from "./Question";


const Game = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQues, setCurrentQues] = useState(null);

  // fetch ques from api on mount
  useEffect(() => {
    (async () => {
      try {
        const { data } = await openTrivia.get();
        const { results } = data;

        const questions = results.map((loadedQues) => {
          const formattedQues = {
            question: loadedQues.question,
            choices: [...loadedQues.incorrect_answers],
            answer: loadedQues.correct_answer,
          };

          formattedQues.answer = Math.floor(Math.random() * 4); // random positon from 0 -3 to put correct ans

          formattedQues.choices.splice(
            formattedQues.answer,
            0,
            loadedQues.correct_answer
          );
          return formattedQues;
        });

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
      <Question questions={currentQues} />
    </>
  );
};

export default Game;
