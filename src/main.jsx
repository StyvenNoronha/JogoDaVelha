import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/generic/reset.css'
import './style/elements/base.css'
import './style/settings/colors.css'
import Sobre from './objects/Sobre'
import Logo from './objects/Logo'
import Menu from './objects/Menu'




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <Logo />
      <Sobre />
      <Menu />
    </>
  </React.StrictMode>
)
