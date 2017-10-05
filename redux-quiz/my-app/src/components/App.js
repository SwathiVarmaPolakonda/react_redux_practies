import React from "react";
import { Component } from "react";
import { connect } from 'react-redux'
import reducer_quiz from "../reducers"
import {fetchQuestion} from "../actions";
import {browserHistory} from 'react-router-dom';
import { Redirect } from 'react-router';

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
    'question' : ''

  }
    this.Result = this.Result.bind(this);
}
// handleChange(event) {
//     this.setState({question: event.target.value});
//
//   }

  // Result = () => {
  //   browserHistory.push('/Result');
  // };


  render(){
const {  question } = this.props;
  console.log("testing");
  console.log(this.props.quiz);

    return (
      <div className="commentBox">
      <div  className="home-container">
            <br/>
           <div><h3>Quiz</h3></div>
               <br/>
             <br/>
               <div><button className="input" onClick={this.Result} type="button">
                Submit
                   </button>
                   <div><input type="radio"  defaultChecked={false} /></div>
               </div>
               {this.props.quiz.length!==0?
               <div>
                <h1> {question[0].qno.ques}</h1>
               <h1> {question[0].opt1}</h1>
                <h1> {question[0].opt2}</h1>
                 <h1> {question[0].opt3}</h1>
                  <h1> {question[0].opt4}</h1>
                    <h1> {question[0].ans}</h1>
             </div>
           : <div/>}

          </div>
      </div>
    );

  }

  Result(){
    const { dispatch, question } = this.props;
    console.log("inresult");
    console.log(this.props.quiz)
    fetch('https://opentdb.com/api.php?amount=10')
    .then((result) => {
       return result.json();
   }).then((result) => {
        // Do something with the result
console.log("result");
console.log(result);
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
