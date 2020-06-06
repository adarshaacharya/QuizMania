import styled from "styled-components";


export const StyledCurrentQues = styled.h2`
  @media screen and (max-width : 500px) {
      font-size : 2rem;
      font-weight : 600;
      line-height : 2;
  }
`


export const Choices = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const ChoiceContainer = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  font-size: 1.8rem;
  background-color: ${({ color }) =>
    color === "correct"
      ? "var(--success-color)"
      : color === "incorrect"
      ? "var(--danger-color)"
      : "var(--light-color)"};

  border-radius: 6px;

  color: ${({ color }) =>
    color === "correct"
      ? "var(--light-color)"
      : color === "incorrect"
      ? "var(--light-color)"
      : "var(--dark-color)"};

  &:hover {
    cursor: pointer;
    transform: translateY(-0.1rem);
    transition: transform 150ms;
  }
`;

export const ChoicePrefix = styled.p`
  padding: 1.5rem 2.5rem;
  background-color: var(--primary-color);
  color: white;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
`;

export const ChoiceText = styled.p`
  padding: 1.5rem;
  width: 100%;
  text-align: left;
`;

