import React from "react"
import Cartao from "../../objects/Cartao"
import Jogador from "../../objects/Jogador"
import "./style.css"

const Hashtag = () => (
  <Cartao>
    <ul className="hashtag">
      <li className="item">
        <Jogador player="o" />
      </li>
      <li className="item">
        <Jogador player="x" />
      </li>
      <li className="item">
        <Jogador player="o" />
      </li>
      <li className="item">
        <Jogador player="x" />
      </li>
      <li className="item">
        <Jogador player="x" />
      </li>
      <li className="item">
        <Jogador player="o" />
      </li>
      <li className="item">
        <Jogador player="x" />
      </li>
      <li className="item">
        <Jogador player="o" />
      </li>
      <li className="item">
        <Jogador player="x" />
      </li>
    </ul>
  </Cartao>
)

export default Hashtag
