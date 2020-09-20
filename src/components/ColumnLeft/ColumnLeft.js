import React, {useContext} from "react"
import "./ColumnLeft.css"
import {Header} from "./Header"
import {Navigation} from "./Navigation"
import {DeviceContext} from "../../contexts/deviceContext"

export function ColumnLeft() {
  const {device} = useContext(DeviceContext)
  return (
    <div className="ColumnLeft">
      <Header/>
      {device !== 'phone' && (
        <Navigation/>
      )}
    </div>
  )
}