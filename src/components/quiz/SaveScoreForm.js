import React from "react";
import styled from "styled-components";

import { Button, Container } from "../../@quiz-ui";
import useInput from "../hooks/useInput";
import { useFirebase } from "../firebase/FirebaseContext";

const SaveScoreForm = ({ score, scoreSaved }) => {
  const [userName, setUserName] = useInput();
  const firebase = useFirebase();

  const saveHighScore = (e) => {
    e.preventDefault();

    const record = {
      name: userName,
      score,
    };

    // saving to firebase db
    firebase.scores().push(record, () => {
      scoreSaved();
    });
  };

  return (
    <>
      <ScoreContainer>
        <h1>Score : {score} </h1>
        <StyledForm onSubmit={saveHighScore}>
          <StyledInput
            type="text"
            name="username"
            id="username"
            placeholder="Enter your name"
            value={userName}
            onChange={setUserName}
            required
          />
          <SubmitButton type="submit" disabled={!userName}>
            Submit
          </SubmitButton>
        </StyledForm>
        {/* <LinkButton to="/">Got To Home &rarr;</LinkButton> */}
      </ScoreContainer>
    </>
  );
};

export default SaveScoreForm;

const ScoreContainer = styled(Container)`
  background: var(--grey-color);
  max-height: 65vh;
  border-radius: 10px;
  border-top: 5px solid var(--primary-color);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px;
`;

const SubmitButton = styled(Button)`
  padding: 1.5rem 4rem;
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const StyledInput = styled.input`
  margin-bottom: 1rem;
  width: 30rem;
  padding: 1.5rem;
  font-size: 1.8rem;
  border: none;
  margin-bottom: 3rem;
  border-radius: 6px;
`;
