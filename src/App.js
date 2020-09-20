import React, {useContext, useEffect, useState} from "react"
import "./App.css"
import {ColumnLeft} from "./components/ColumnLeft/ColumnLeft"
import {ColumnRight} from "./components/ColumnRight/ColumnRight"
import {BrowserRouter} from "react-router-dom"
import {useClassList} from "./hooks/useClassList"
import {DeviceContext} from "./contexts/deviceContext"
import {Navigation} from "./components/ColumnLeft/Navigation"

export function App() {

  function defineDevice() {
    if (window.innerWidth < 578) {
      setDevice('phone')
    } else if (window.innerWidth < 768) {
      setDevice('tablet')
    } else {
      setDevice('desktop')
    }
  }

  const {device, setDevice} = useContext(DeviceContext)
  const classList = useClassList(['App'])

  if (device) classList.add(`App-${device}`)

  useEffect(
    () => {
      defineDevice()
      window.addEventListener('resize', defineDevice)
      return () => window.removeEventListener('resize', defineDevice)
    },
    []
  )

  return (
    <div className={classList}>
      <BrowserRouter>
        {device !== 'phone' && (
          <>
            <ColumnLeft/>
            <ColumnRight/>
          </>
        )}
        {device === 'phone' && (
          <>
            <Navigation/>
            <div className="App-content">
              <ColumnLeft/>
              <ColumnRight/>
            </div>
          </>
        )}
      </BrowserRouter>
    </div>
  )
}