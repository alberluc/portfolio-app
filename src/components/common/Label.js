import React from "react"
import './Label.css'
import {useClassList} from "../../hooks/useClassList"

export function Label({className, children, ...props}) {
  const classList = useClassList(['Label'])
  if (className) classList.add(className)
  return (
    <label className={classList} {...props}>{children}</label>
  )
}