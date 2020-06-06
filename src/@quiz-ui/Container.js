import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 80rem;
  margin: auto;
  padding: 15rem 0;
  position: relative;
  margin: auto;
  overflow: hidden;

  > * {
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 4rem;
    }
  }
`;

export const QuizContainer = styled(Container)`
  padding: 5rem;

  @media screen and (max-width: 500px) {
    padding : 2rem;
  }
`;


