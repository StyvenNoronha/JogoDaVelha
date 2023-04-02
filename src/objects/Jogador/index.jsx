import React from "react"
import "./style.css"
import playerX from "../../img/X.svg"
import playerO from "../../img/Circle.svg"

const Jogador = (props) => {
  const players = []
  players["x"] = playerX
  players["o"] = playerO

  return (
    <button className="jogador">
      <img src={players[props.player]} alt="Jogador" />
    </button>
  )
}

export default Jogador
