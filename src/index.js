import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import Firebase from "./components/firebase/Firebase";
import {FirebaseContext} from "./components/firebase/FirebaseContext";

const firebase = new Firebase();

ReactDOM.render(
  <FirebaseContext.Provider value={firebase}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
