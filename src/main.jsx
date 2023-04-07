import React from 'react'
import ReactDOM from 'react-dom/client'
import "./main.css"
import './style/generic/reset.css'
import './style/elements/base.css'
import './style/settings/colors.css'
import './style/settings/spacing.css'
import './style/settings/size.css'
import Header from './components/Header'
import Hashtag from './components/Hashtag'
import Input from './objects/Input'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="main">
      <Header />
      <Hashtag />
      <Input id="show" value="show" content="Mostrar Eventos" />  
    </main>
  </React.StrictMode>
)
