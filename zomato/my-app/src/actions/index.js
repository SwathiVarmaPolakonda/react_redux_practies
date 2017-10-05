//import axios from "axios";
import { CALL_API } from 'redux-api-middleware'
export const FETCH_RESTAURANT = "FETCH_RESTAURANT";

export function fetchRestaurant(result) {
      return {

                 type: FETCH_RESTAURANT,
                 data: {
                   city_name: result.restaurant.city_name

                       }
                  }
          }
