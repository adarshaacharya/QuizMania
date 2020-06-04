import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled.button`
  font-size: 1.8rem;
  padding: 1rem 0;
  width: 20rem;
  text-align: center;
  border: 0.1rem solid #56a5eb;
  margin-bottom: 1rem;
  text-decoration: none;
  color: #56a5eb;
  background-color: white;

  &:hover {
    cursor: pointer;
    transform: translateY(-0.1rem);
    transition: transform 150ms;
  }
`;

export const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
`;

export const LinkButton = styled(Button.withComponent(Link))``;
