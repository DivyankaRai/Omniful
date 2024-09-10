import { StrictMode } from 'react'
import { Provider } from 'react-redux';
import store from './Redux/store.js';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
