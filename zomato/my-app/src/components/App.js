import React from "react";
import { Component } from "react";
import { connect } from 'react-redux'
import reducer_weather from "../reducers"
import {fetchRestaurant} from "../actions";

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
const {  restaurant } = this.props;
  console.log("ouiou");
  console.log(restaurant);

    return (
      <div>
      <div  className="home-container">
            <br/>
           <div><h3>Enter Country/City:</h3></div>
                 <input type="text" placeholder="Enter a town/city name" value={this.state.city} onChange={this.handleChange} />
             <br/>
             <br/>
               <div><button className="input" onClick={() => this.callApi()}>
                 Get Restaurants
                   </button>
               </div>
               {restaurant.length!==0?
               <div>

                  <h1>Cuisine_Name: {restaurant.city_name}</h1>

               </div>
               : <div/>}
          </div>
      </div>
    );

  }

  callApi(){
    const { dispatch, restaurant } = this.props;
//fetch('https://developers.zomato.com/api/v2.1/locations?q='+this.state.city+'&APPID=f8e2491fb0d44e52fb24a500acc08f9d',{


    fetch('https://developers.zomato.com/api/v2.1/locations?q=hyderabad',{
      method: 'GET',
      headers: { 'Content-Type': 'application/json' ,
                 'user-key	': 'f8e2491fb0d44e52fb24a500acc08f9d'
             }}
  ).then((result) => {
       return result.json();

   }).then((result) => {

        // Do something with the result
        console.log("result");
console.log(result);
        dispatch(fetchRestaurant(JSON.parse(result))
      );

  });
 }

 }
 function select(state) {
   return {
      restaurant: state.restaurant

   }
}
export default connect(select)(App)
