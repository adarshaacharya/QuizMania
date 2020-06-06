import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width : 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem;

  > * {
    width: 100%;
  }
`;
