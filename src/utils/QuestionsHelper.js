import openTrivia from "../api/openTrivia";

export const loadQuestions = async () => {
  try {
    const { data } = await openTrivia().get();
    const { results } = data;
    return convertQuestionsFromAPI(results);
  } catch (err) {
    console.log(err);
  }
};

const convertQuestionsFromAPI = (rawQuestion) => {
  const questions = rawQuestion.map((loadedQuestion) => {
    const formattedQuestion = {
      question: loadedQuestion.question,
      choices: [...loadedQuestion.incorrect_answers],
      answer: loadedQuestion.correct_answer,
    };

    formattedQuestion.answer = Math.floor(Math.random() * 4); // random positon from 0 -3 to put correct ans

    formattedQuestion.choices.splice(
      formattedQuestion.answer,
      0,
      loadedQuestion.correct_answer
    );
    return formattedQuestion;
  });

  return questions;
};
