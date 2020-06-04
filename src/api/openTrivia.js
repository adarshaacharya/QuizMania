import Axios from 'axios'

// create instance of axios

export default Axios.create({
    baseURL : "https://opentdb.com/api.php?amount=20&category=18&difficulty=easy&type=multiple"
})