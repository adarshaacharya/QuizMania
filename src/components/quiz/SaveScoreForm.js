import React from "react";
import styled from "styled-components";

import { Button, LinkButton, Container } from "../../@quiz-ui";
import useInput from "../hooks/useInput";
import { useFirebase } from "../firebase/FirebaseContext";

const SaveScoreForm = ({ score }) => {
  const [userName, setUserName] = useInput();
  const firebase = useFirebase()

  console.log(firebase)
  const saveHighScore = (e) => {
    e.preventDefault();
    const record = {
      name: userName,
      score,
    };

    console.log(record);
  };

  return (
    <>
      <Container>
        <h1>Score : {score} 💯🔥</h1>
        <StyledForm onSubmit={saveHighScore}>
          <StyledInput
            type="text"
            name="username"
            id="username"
            placeholder="johndoe"
            value={userName}
            onChange={setUserName}
            required
          />
          <Button type="submit" disabled={!userName}>
            Submit
          </Button>
        </StyledForm>
        <LinkButton to="/">Got To Home &rarr;</LinkButton>
      </Container>
    </>
  );
};

export default SaveScoreForm;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  margin-bottom: 1rem;
  width: 20rem;
  padding: 1.5rem;
  font-size: 1.8rem;
  border: none;
  box-shadow: 0 0.1rem 1.4rem 0 rgba(86, 185, 235, 0.5);

  &::placeholder {
    color: #aaa;
  }
`;
