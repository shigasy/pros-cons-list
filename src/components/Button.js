import React from 'react'
import "./Button.css"

const Button = (props) => (
  <div>
    <a className="App-description__button--how-to-use" onClick={props.clickMotion}>{props.text}</a>
  </div>
)

export default Button
