//import axios from "axios";
export const FETCH_QUESTION = "FETCH_QUESTION";

export function fetchQuestion(result) {
      return {
        type: FETCH_QUESTION,
        data: {
          ques:result.ques,
          opt1:result.opt1,
          opt2:result.opt2,
          opt3:result.opt3,
          opt4:result.opt4,
          ans:result.ans
          }
      }
}
