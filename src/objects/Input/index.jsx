import React from "react";

import './style.css'



const Input = (props) => (
  
    <input className="input" id={props.id} type={props.type} value={props.value} />

)

export default Input;