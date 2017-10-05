import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import { BrowserRouter } from 'react-router-dom'
import {  BrowserRouter as Router,Route } from 'react-router-dom'
import Result from "./components/Result"

import App from "./components/App";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <Router>
    <div>
      <BrowserRouter>
      <div>

      <Route exact path="/" component={App}/>
      <Route path="/Result" component={Result}/>
      </div>
      </BrowserRouter>

    </div>
  </Router>
  </Provider>,
  document.querySelector(".container")
);
//<Provider store={store}>
//<Router history={browserHistory} routes={Routes} />
