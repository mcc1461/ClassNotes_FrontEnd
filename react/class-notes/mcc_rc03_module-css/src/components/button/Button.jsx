import "./button.css";
import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className="btn-blue title">{name}</button>
    </div>
  )
}

export default Button