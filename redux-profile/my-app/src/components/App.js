import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { index } from './actions/index'
//import ShowResults from './ShowResults.js'
import { fetchForm } from '../actions/index'

//import showResults from './components/showResults.js'

class App extends Component {
  constructor(props) {
    super(props);

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFirstName = this.handleFirstName.bind(this);
      this.handleLastName = this.handleLastName.bind(this);
      this.handleEmail = this.handleEmail.bind(this);
      this.handleAddress = this.handleAddress.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleSave = this.handleSave.bind(this);
  }

  handleFirstName(event) {
      const { dispatch } = this.props;
      const { firstName, lastName, e_mail, address  } = this.props.form;
      dispatch(fetchForm(event.target.value, lastName, e_mail, address ));

  }

  handleLastName(event) {
    const { dispatch } = this.props;
    const { firstName, lastName, e_mail, address  } = this.props.form;
    dispatch(fetchForm(firstName, event.target.value, e_mail, address ));

  }

  handleEmail(event) {
    const { dispatch } = this.props;
    const { firstName, lastName, e_mail, address  } = this.props.form;
    dispatch(fetchForm(firstName, lastName, event.target.value, address ));
  }

  handleAddress(event) {
    const { dispatch } = this.props;
    const { firstName, lastName, e_mail, address  } = this.props.form;
    dispatch(fetchForm(firstName, lastName, e_mail,  event.target.value ));
  }

  handleSubmit(event) {
    alert('Are you sure you want to submit the data: ' + this.state.submit);
    event.preventDefault();
  }

   handleClick(event) {
    event.preventDefault();
  }

  handleSave(event){
    console.log('save');
    const { dispatch } = this.props;
    const { firstName, lastName, e_mail, address  } = this.props.form;
    dispatch(fetchForm(firstName, lastName, e_mail, address ));
    alert('Are you sure you want to submit the data');
  }

   render() {
     console.log("abc");
     console.log(this.props.form);
      //const { dispatch,  form} = this.props;

      return (
         <div>

         <form onSubmit={this.handleSubmit}>
         <h3>Profile Page</h3>
         <div className="container">
         <label>
         Name:
         <input type="text" placeholder="FirstName" required={true} value={this.props.form.firstName} onChange={this.handleFirstName} />
         </label>
       <br />
       <br/>
       <label>
         LastName:

         <input type="text" placeholder="LastName" required={true} value={this.props.form.lastName} onChange={this.handleLastName} />
         </label>
       <br />
        <br/>
       <label>
         Email:

         <input type="email"  placeholder="Email" required={true} value={this.props.form.e_mail} onChange={this.handleEmail} />
           </label>
       <br />
        <br/>
       <label>
         Address:

         <input type="text" placeholder="Address" required={true} value={this.props.form.address} onChange={this.handleAddress} />
          </label>
       <br />
       <br />

              <div>
              <input className="success" disabled={(!this.props.form.firstName),(!this.props.form.lastName),(!this.props.form.e_mail),(!this.props.form.address)} type="button" value="edit" onClick={this.handleClick} />
              <input  className="success" type="button" value="save" onClick={this.handleSave} />
              </div>
                  </div>
              </form>
              </div>
      );
   }
}

function select(state) {
   return {
      form: state.form
   }
}

export default connect(select)(App)
