import React from "react"
import meImage from "../../images/me.jpeg"
import "./Avatar.css"

export function Avatar() {
  return (
    <div className="Avatar">
      <img className="Avatar-image" src={meImage} alt="Moi"/>
    </div>
  )
}