//import axios from "axios";
export const FETCH_QUESTION = "FETCH_QUESTION";

export function fetchQuestion(result) {
      return {
        type: FETCH_QUESTION,
        data: {
          question:result.question,
          }
      }
}
