
import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
          'coord': '',
            'main': '',
            'wind': '',
            'country': '',
            'weather': '',
            'sys': '',

        }
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
      this.setState({country: event.target.value});
      this.setState({weather: event.target.value});
    }

    callApi(){
     // Github fetch library : https://github.com/github/fetch
     // Call the API pagereq = $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=London,uk&callback=?');

     fetch('http://api.openweathermap.org/data/2.5/weather?q='+this.state.country+'&APPID=65a4d0339f88c69549f6775c6ff38824')
     .then((result) => {

        return result.json();
    }).then((result) => {
         // Do something with the result
         console.log(result);
         this.setState({
           "coord": result.coord,
             "main":result.main,
             "wind":result.wind,
             "weather":result.weather[0].icon,
             "sys":result.sys

       })

     })
   }

   render() {
     let image_icon="http://openweathermap.org/img/w/"+this.state.weather+".png";
     return (
       <div  className="home-container">
       <br/>
      <div><h3>Enter Country/City:</h3></div>
            <input type="text" placeholder="Enter a town/city name" value={this.state.country} onChange={this.handleChange} />
        <br/>
        <br/>
          <div><button className="input" onClick={() => this.callApi()}>
            Get weather
              </button>
          </div>
          <div>
            <img src = {image_icon} />

          </div>
       <div>
       <h1>Longitude: {this.state.coord.lon}</h1>
       <h1>Latitude: {this.state.coord.lat}</h1>

       <h1>Temperature: {this.state.main.temp}</h1>
       <h1>Humidity: {this.state.main.humidity}</h1>
       <h1>Pressure: {this.state.main.pressure}</h1>
       <h1>Temp_min: {this.state.main.temp_min}</h1>
       <h1>Temp_max: {this.state.main.temp_max}</h1>
       <h1>Speed: {this.state.wind.speed}</h1>
        <h1>Weather: {this.state.weather}</h1>
        <h1>Country: {this.state.sys.country}</h1>


       </div>
     </div>
   );
   }
 }
export default App;
