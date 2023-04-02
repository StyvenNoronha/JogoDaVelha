import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/generic/reset.css'
import './style/elements/base.css'
import './style/settings/colors.css'
import './style/settings/spacing.css'
import Header from './components/Header'
import Cartao from './objects/Cartao'






ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <Header/> 
    <Cartao/>
  </React.StrictMode>
)
