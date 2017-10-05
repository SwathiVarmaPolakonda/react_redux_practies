import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers/index'
import App from './components/App.js'
import Center from 'react-center';
import './App.css';



let store = createStore(todoApp)

let rootElement = document.getElementById('container')

ReactDOM.render(
  <BrowserRouter>
  <Center>
<div>
   <Provider store = {store}>
      <App />
   </Provider>
   </div>
   </Center>
   </BrowserRouter>,
rootElement

);
