import React from "react";
import styled from "styled-components";

const ProgressBar = ({ max, current }) => {
  const width = (current / max) * 100;
    console.log(width)
  return (
    <>
      <StyledProgressBar>
      <StyledProgressBarFill fill={width}/>
      </StyledProgressBar> 
    </>
  );
};

export default ProgressBar;

const StyledProgressBar = styled.div`
  width: 20rem;
  height: 4rem;
  border: 0.3rem solid var(--primary-color);
  margin-top: 1.5rem;
  @media screen and (max-width : 500px){
    width : 15rem;
    height : 3rem;
  }
`;

const StyledProgressBarFill = styled.div`
  height: 3.4rem;
  background : var(--primary-color);
  width: ${props => props.fill}% ;
  @media screen and (max-width : 500px){
    height : 2.5rem;
  }
`;
