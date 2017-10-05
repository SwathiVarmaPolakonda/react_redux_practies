import React from "react";
import { Component } from "react";
import { connect } from 'react-redux'
import reducer_quiz from "../reducers"
import {fetchQuestion} from "../actions";
import { BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router';

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
Result = () => {
  BrowserRouter.push('/Result');
}

  render(){
const {  question } = this.props;
  console.log("ouiou");
  console.log(question);

    return (
      <div className="commentBox">
      <div  className="home-container">
            <br/>
           <div><h3>Quiz</h3></div>
               <br/>
             <br/>
               <div><button className="input" onClick={this.Result}>
                Submit
                   </button>
               </div>


          </div>
      </div>
    );

  }

  callApi(){
    const { dispatch, question } = this.props;
    fetch('https://us-central1-tutorpedia-20f08.cloudfunctions.net/questions?qno=1&check=1&tname=java_ques')
    .then((result) => {
       return result.json();
   }).then((result) => {
        // Do something with the result

        dispatch(fetchQuestion(result)
      );

  });
 }

 }
 function select(state) {
   return {
      quiz: state.quiz

   }
}
export default connect(select)(App)
