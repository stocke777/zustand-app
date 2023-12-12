import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MainContextProvider from './mainContext'
import { Provider } from 'react-redux';
import store from './reduxStore'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <MainContextProvider>
        <App />
      </MainContextProvider>
    </Provider>
  </React.StrictMode>,
)
