import React from "react";

import './style.css'
import Label from "../Label";



const Input = (props) => (
  <>
    <input id={props.id} type={props.type} value={props.value} />
    <Label htmlFor={props.id} content={props.content} />
  </>
)

export default Input;