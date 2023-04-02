import React from "react"
import './style.css'
const Cartao = (props) =>(
  <article className="cartao">
    {props.children}
  </article>
)


export default Cartao