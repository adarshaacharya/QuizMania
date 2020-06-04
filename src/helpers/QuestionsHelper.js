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

const convertQuestionsFromAPI = (rawQues) => {
  const questions = rawQues.map((loadedQues) => {
    const formattedQues = {
      question: loadedQues.question,
      choices: [...loadedQues.incorrect_answers],
      answer: loadedQues.correct_answer,
    };

    formattedQues.answer = Math.floor(Math.random() * 4); // random positon from 0 -3 to put correct ans

    formattedQues.choices.splice(
      formattedQues.answer,
      0,
      loadedQues.correct_answer
    );
    return formattedQues;
  });

  return questions;
};
