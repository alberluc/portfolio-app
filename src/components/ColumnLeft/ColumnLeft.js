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
      <div className="Wave-container">
        <svg width="320" height="1440" viewBox="0 0 320 1440" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path d="M96 1440L112 1392C128 1344 160 1248 192 1152C224 1056 256 960 266.7 864C277 768 267 672 234.7 576C203 480 149 384 117.3 288C85 192 75 96 69.3 48L64 0H320L320 48C320 96 320 192 320 288C320 384 320 480 320 576C320 672 320 768 320 864C320 960 320 1056 320 1152C320 1248 320 1344 320 1392V1440H96Z"/>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="1440" height="320" fill="white" transform="translate(0 1440) rotate(-90)"/>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  )
}