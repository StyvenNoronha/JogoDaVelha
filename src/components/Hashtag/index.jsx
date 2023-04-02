import React from "react"
import Cartao from "../../objects/Cartao"
import Jogador from "../../objects/Jogador"
import "./style.css"

const Hashtag = () => (
  <Cartao>
    <Jogador player="x" />
    <Jogador player="o" />
  </Cartao>
)

export default Hashtag
