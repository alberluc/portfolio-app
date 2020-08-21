import React from "react"
import "./ColumnLeft.css"
import {Header} from "./Header"
import {Navigation} from "./Navigation"

export function ColumnLeft() {
  return (
    <div className="ColumnLeft">
      <Header/>
      <Navigation/>
    </div>
  )
}