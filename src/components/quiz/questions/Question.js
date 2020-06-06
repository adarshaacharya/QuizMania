import React, { useState } from "react";

import {
  Choices,
  ChoiceContainer,
  ChoicePrefix,
  ChoiceText,
  StyledCurrentQues
} from "./Question.style";

const Question = ({ currentQuestion, changeQuestion }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [answering, setAnswering] = useState(false);
  const [display, setDisplay] = useState(null);

  const checkAnswer = (selectedAnswer) => {
    if (answering) return;
    setAnswering(true);
    setSelectedAnswer(selectedAnswer);

    const colorToApply =
      selectedAnswer === currentQuestion.answer ? "correct" : "incorrect";
    setDisplay(colorToApply);
    const bonus = selectedAnswer === currentQuestion.answer ? 10 : 0;

    // after ans ques
    setTimeout(() => {
      setSelectedAnswer(-1);
      setAnswering(false);
      changeQuestion(bonus);
    }, 1000);
  };

  return (
    <>
      <StyledCurrentQues dangerouslySetInnerHTML={{ __html: currentQuestion.question }}></StyledCurrentQues>
      <Choices>
        {currentQuestion.choices.map((choice, index) => (
          <ChoiceContainer
            key={index}
            color={selectedAnswer === index ? display : undefined}
            onClick={() => checkAnswer(index)}
          >
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
