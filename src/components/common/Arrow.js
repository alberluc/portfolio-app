import React from "react"
import {ReactComponent as ArrowIcon} from "../../images/icons/arrow.svg"
import "./Arrow.css"
import {useClassList} from "../../hooks/useClassList"

export function Arrow({direction, disabled = false, onClick}) {
  const classList = useClassList(['Arrow', `Arrow-${direction}`])
  return (
    <button onClick={onClick} className={classList} disabled={disabled}>
      <ArrowIcon/>
    </button>
  )
}