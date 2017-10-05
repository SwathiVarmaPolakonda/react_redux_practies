import React from 'react'

import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers/store'
import App from './components/App.js'
import Center from 'react-center';
import './App.css';



let store = createStore(todoApp)

let rootElement = document.getElementById('root')

render(<Center>
<div>
   <Provider store = {store}>
      <App />
   </Provider>
   </div>
   </Center>,
rootElement

);
