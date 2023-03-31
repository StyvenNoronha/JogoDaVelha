import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/generic/reset.css'
import './style/elements/base.css'
import './style/settings/colors.css'
import Hello from './components/Hello/Hello'
import Nav from './components/Nav/Nav'



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nav/>
  </React.StrictMode>
)
