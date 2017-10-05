import React from "react";
import { Component } from "react";
import { connect } from 'react-redux'
import reducer_weather from "../reducers"
import {fetchWeather} from "../actions";

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
    'city' : ''

  }
    this.handleChange = this.handleChange.bind(this);
}
handleChange(event) {
    this.setState({city: event.target.value});

  }
  render(){
const {  weather } = this.props;
  console.log("ouiou");
  console.log(weather);

    return (
      <div>
      <div  className="home-container">
            <br/>
           <div><h3>Enter Country/City:</h3></div>
                 <input type="text" placeholder="Enter a town/city name" value={this.state.city} onChange={this.handleChange} />
             <br/>
             <br/>
               <div><button className="input" onClick={() => this.callApi()}>
                 Get weather
                   </button>
               </div>
               {weather.length!==0?
               <div>
               <h1>Latitude: {weather[0].latitude}</h1>
               <h1>Longitude: {weather[0].longitude}</h1>
               <h1>Humidity: {weather[0].main.humidity}</h1>
                <h1>Pressure: {weather[0].main.pressure}</h1>
                <h1>Temp_min: {weather[0].main.temp_min}</h1>
                <h1>Temp_max: {weather[0].main.temp_max}</h1>
                <h1>Speed: {weather[0].wind.speed}</h1>
                <h1>Weather: {weather[0].weather}</h1>
               </div>
               : <div/>}
          </div>
      </div>
    );

  }

  callApi(){
    const { dispatch, weather } = this.props;
  //  http://api.eventful.com/json/events/search?app_key=xC5PjP9FhG2fJB3z&location=Hyderabad&date=Future
   fetch('http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+'&APPID=65a4d0339f88c69549f6775c6ff38824')
        .then((result) => {
       return result.json();
   }).then((result) => {
        // Do something with the result

        dispatch(fetchWeather(result)
      );

  });
 }

 }
 function select(state) {
   return {
      weather: state.weather

   }
}
export default connect(select)(App)
