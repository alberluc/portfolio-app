import {Link} from "react-router-dom"
import React from "react"
import "./ButtonLink.css"

export function ButtonLink({children, ...props}) {
  return (
    <span className="ButtonLink">
      <Link {...props}>{children}</Link>
    </span>
  )
}