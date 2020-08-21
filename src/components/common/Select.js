import React from "react"
import './Select.css'

export function Select({children}) {
  return (
    <span className="Select-container">
      <select className="Select">{children}</select>
    </span>
  )
}