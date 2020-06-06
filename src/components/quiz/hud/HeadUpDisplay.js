import React from "react";
import styled from "styled-components";

import ProgressBar from "./ProgressBar";

const HeadUpDisplay = ({ score, questionNumber }) => {
  return (
    <HUD>
      <HUDItem>
        <HUDPrefix>Question : {questionNumber} / 20</HUDPrefix>
        <ProgressBar max={20} current={questionNumber} />
      </HUDItem>

      <HUDItem>
        <HUDPrefix>Score 🚀</HUDPrefix>
        <h4 className="hud-score">{score}</h4>
      </HUDItem>
    </HUD>
  );
};

const HUD = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
  padding: 2rem;
  border: 1px solid var(--primary-color);
  border-radius: 6px;
`;

const HUDItem = styled.div`
  color: var(--primary-color);
  text-align: center;
  .hud-score {
    font-weight: 900;
    font-size: 4rem;
    color: var(--light-color);
    text-shadow: 4px 4px var(--grey-color);
    @media screen and (max-width: 500px) {
      font-weight : 800;
      font-size : 3rem;
  }
  }
`;

const HUDPrefix = styled.h3`
  margin-bottom: 2rem;
  font-weight: 800;
  font-size: 2rem;
  @media screen and (max-width: 500px) {
    margin-bottom: 0.5rem;
  }
`;

export default HeadUpDisplay;
