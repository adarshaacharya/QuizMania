import React from "react";

import { LinkButton } from "../../@quiz-ui";

const Home = () => {
  return (
    <>
      <h1>Trivia Quiz</h1>
        <LinkButton to="/quiz">Start Game</LinkButton>
        <LinkButton to="/high-scores">Check High Scores</LinkButton>
    </>
  );
};

export default Home;
