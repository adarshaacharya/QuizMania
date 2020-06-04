import React from "react";

import GlobalStyles from "../styles/GlobalStyles";
import { Container } from "../@quiz-ui";

import Home from "./pages/Home";
import NotFound from "./pages/404";

import Game from "./quiz/Game";
import HighScores from "./quiz/HighScores";

import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/game" component={Game} />
          <Route path="/high-scores" component={HighScores} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
      <GlobalStyles />
    </Container>
  );
}

export default App;
