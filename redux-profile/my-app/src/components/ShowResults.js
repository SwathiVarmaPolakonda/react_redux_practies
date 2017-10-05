// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
//
// export default (async function showResults(values) {
//   await sleep(500); // simulate server latency
//   window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
// });
import React, { Component, PropTypes } from 'react'

export default class ShowResults extends Component {
   render() {
      return (
         <div>
            <input type = 'text' ref = 'input' />

            <button onClick = {(e) => this.handleClick(e)}>
               Save Profile
            </button>

         </div>
      )
   }

   handleClick(e) {
      const node = this.refs.input
      const text = node.value.trim()
      this.props.onAddClick(text)
      node.value = ''
   }
}
