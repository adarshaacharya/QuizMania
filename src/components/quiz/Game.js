import React, { useEffect, useState } from "react";
import Axios from "axios";

import openTrivia from "../../api/openTrivia";

import Question from "./Question";

const dummyQues = {
  question: "Which is the best programming languge?",
  choices: ["Javascript", "Java", "C#", "Rust"],
};

const Game = () => {
  const [questions, setQuestions] = useState([]);

  
  // fetch ques from api on mount
  useEffect(() => {
    (async () => {
      try {
        const { data} = await openTrivia.get();
        setQuestions(data.results);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  console.log(questions);
  return (
    <>
      <Question questions={dummyQues} />
    </>
  );
};

export default Game;
