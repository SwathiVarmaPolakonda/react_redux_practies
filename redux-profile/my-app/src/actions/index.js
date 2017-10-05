//import axios from "axios";
export const FETCH_FORM = "FETCH_FORM";

export function fetchForm(firstName, lastName, e_mail, address) {
  console.log("in actions");
  console.log(firstName,lastName,e_mail,address);
      return {
        type: FETCH_FORM,
        data:{firstName:firstName,
            lastName:lastName,
            e_mail:e_mail,
            address:address
          }

      };
}
