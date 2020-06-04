import React from "react";

import {
  Choices,
  ChoiceContainer,
  ChoicePrefix,
  ChoiceText,
} from "./Question.style";

const Question = ({ questions }) => {
  return (
    <>
      <h2 dangerouslySetInnerHTML={{ __html: questions.question }}></h2>

      <Choices>
        {questions.choices.map((choice, index) => (
          <ChoiceContainer key={index}>
            <ChoicePrefix>{index + 1}</ChoicePrefix>
            <ChoiceText
              dangerouslySetInnerHTML={{ __html: choice }}
            ></ChoiceText>
          </ChoiceContainer>
        ))}
      </Choices>
    </>
  );
};

export default Question;
