import React from "react";

import { LinkButton } from "../../@quiz-ui";

const Home = () => {
  return (
    <>
      <h1>Quiz App</h1>
        <LinkButton to="/game">Start Game</LinkButton>
        <LinkButton to="/high-scores">High Scores</LinkButton>
    </>
  );
};

export default Home;