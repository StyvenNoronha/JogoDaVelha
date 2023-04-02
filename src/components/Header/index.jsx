import React from "react"
import Logo from "../../objects/Logo"
import Menu from "../../objects/Menu"
import Sobre from "../../objects/Sobre"

import './style.css'

const Header = () => (
  <header className="header">
    <Logo />
    <Sobre />
    <Menu />
  </header>
)
export default Header
