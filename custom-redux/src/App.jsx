import { useState } from 'react'
import { Provider } from 'react-redux'

import './App.css'
import Demo from './components/Demo'

import store from './store'

function App() {

  return (
    <Provider store={store}>
      <Demo />
    </Provider>
  )
}

export default App
