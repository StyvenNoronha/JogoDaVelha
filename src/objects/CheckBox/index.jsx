import React from "react"
import Label from "../Label"
import Input from "../Input"
import "./style.css"



const CheckBox = (props) => (
  <>
    <Input
      type="checkbox"
      id={props.id}
      value={props.value}
      content={props.content}
    />
    <Label htmlFor={props.id} content={props.content} />
  </>
)

export default CheckBox