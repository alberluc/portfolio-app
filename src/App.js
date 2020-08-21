import React from "react"
import "./App.css"
import {ColumnLeft} from "./components/ColumnLeft/ColumnLeft"
import {ColumnRight} from "./components/ColumnRight/ColumnRight"
import {BrowserRouter} from "react-router-dom"

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ColumnLeft/>
        <ColumnRight/>
      </BrowserRouter>
    </div>
  )
}