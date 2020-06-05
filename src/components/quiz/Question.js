import React, { useState } from "react";

import {
  Choices,
  ChoiceContainer,
  ChoicePrefix,
  ChoiceText,
} from "./Question.style";

const Question = ({ currentQuestion, changeQuestion }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [answering, setAnswering] = useState(false);
  const [display, setDisplay] = useState(null);

  const checkAnswer = (selectedAnswer) => {
    if (answering) return;
    setAnswering(true);
    setSelectedAnswer(selectedAnswer);

    const color =
      selectedAnswer === currentQuestion.answer ? "correct" : "incorrect";
    setDisplay(color);
    const bonus = selectedAnswer === currentQuestion.answer ? 10 : 0;

    // after ans ques
    setTimeout(() => {
      setSelectedAnswer(-1);
      setAnswering(false);
      changeQuestion();
    }, 1000);
  };

  return (
    <>
      <h2 dangerouslySetInnerHTML={{ __html: currentQuestion.question }}></h2>

      <Choices>
        {currentQuestion.choices.map((choice, index) => (
          <ChoiceContainer
            key={index}
            color={selectedAnswer === index && display}
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
