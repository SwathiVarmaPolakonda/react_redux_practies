//import axios from "axios";
export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(result) {
      return {
        type: FETCH_WEATHER,
        data: {  latitude: result.coord.lat,
          longitude: result.coord.lon,
          main:result.main,
          wind:result.wind,
          weather:result.weather[0].icon,
          }
      }
}
