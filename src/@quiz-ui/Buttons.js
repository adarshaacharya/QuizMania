import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled.button`
  font-size: 1.8rem;
  padding: 2rem;
  text-align: center;
  border: 0.1rem solid var(--primary-color);
  margin-bottom: 1rem;
  text-decoration: none;
  color: var(--primary-color);

  &:hover {
    cursor: pointer;
    transform: translateY(-0.1rem);
    transition: transform 150ms;
  }

  &[disabled]:hover {
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }

`;

export const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
`;

export const LinkButton = styled(Button.withComponent(Link))`
  max-width : 40rem;
  margin-bottom : 5rem;
`;
