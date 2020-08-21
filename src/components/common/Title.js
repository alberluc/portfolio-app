import React from "react"
import "./Title.css"
import {useClassList} from "../../hooks/useClassList"

export function Title({className, level, font, color, weight, children}) {
  const classList = useClassList(['Title', `Title-${level}`, `Title-${font}`, className])
  if (color) {
    classList.add(`Title-${color}`)
  }
  if (weight) {
    classList.add(`Title-${weight}`)
  }
  return (
    <div className={classList}>{children}</div>
  )
}