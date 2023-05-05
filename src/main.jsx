import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './Landing.jsx'
// import './index.css'

// Import our custom CSS
import './scss/styles.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
)
