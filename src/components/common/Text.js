import React from "react"
import "./Text.css"
import {useClassList} from "../../hooks/useClassList"

export function Text({className, children}) {
  const classList = useClassList(['Text', className])
  return <p className={classList}>{children}</p>
}