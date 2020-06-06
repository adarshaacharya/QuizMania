import styled from "styled-components";

export const Container = styled.div`
  height : 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem;
  position: relative;

  > * {
    width: 100%;
  }
`;
