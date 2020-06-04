import React from "react";

import Question from "./Question";

const dummyQues = {
  question: "Which is the best programming languge?",
  answers: ["Javascript", "Java", "C#", "Rust"],
};

const Game = () => {
  return (
    <>
      <Question questions={dummyQues}/>
    </>
  );
};

export default Game;
