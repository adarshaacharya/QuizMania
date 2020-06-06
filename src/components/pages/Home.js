import React from "react";

import { LinkButton , Container} from "../../@quiz-ui";

const Home = () => {
  return (
    <Container>
      <h1>Quiz Mania</h1>
        <LinkButton to="/quiz">Start Game</LinkButton>
        <LinkButton to="/high-scores">Check High Scores</LinkButton>
    </Container>
  );
};

export default Home;
