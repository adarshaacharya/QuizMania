import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled.button`
  display: block;
  font-size: 1.8rem;
  padding: 2rem;
  text-align: center;
  text-transform : uppercase;
  font-weight : 600;
  border: 0.1rem solid var(--primary-color);
  margin-bottom: 1rem;
  text-decoration: none;
  color : var(--light-color);
  background: inherit;
  -webkit-transition: background .3s;
	transition: background .3s;

  &:hover {
    cursor: pointer;
    background : #50597b;
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
  max-width: 40rem;
  margin-bottom: 5rem;
`;
