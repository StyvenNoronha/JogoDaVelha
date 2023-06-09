import React from "react";
import './style.css'
const Label = (props) => (
  <label className="label" htmlFor={props.htmlFor}>{props.content}</label>
)

export default Label;