import React from "react";

import GlobalStyles from "../styles/GlobalStyles";

import Home from "./pages/Home";
import NotFound from "./pages/404";

import Quiz from "./quiz/Quiz";
import HighScores from "./highscore/HighScores";

import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/high-scores" component={HighScores} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
