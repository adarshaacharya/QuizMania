import React from "react";

import { LinkButton } from "../../@quiz-ui";

const Home = () => {
  return (
    <>
      <h1>Quiz App</h1>
        <LinkButton to="/quiz">Start Game</LinkButton>
        <LinkButton to="/high-scores">Check High Scores</LinkButton>
    </>
  );
};

export default Home;
