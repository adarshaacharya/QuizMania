import Axios from "axios";

// create instance of axios
export default (
  amount = 10,
  category = 18,
  difficulty = "easy",
  type = "multiple"
) => {
  return Axios.create({
    baseURL: `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`,
  });
};

// baseURL : `https://opentdb.com/api.php?amount=20&category=18&difficulty=easy&type=multiple`
