import React, {useEffect, useState} from "react"
import {MainSwitch} from "../MainSwitch"
import {Title} from "../common/Title"
import {useLocation} from "react-router-dom"
import {menus} from "../../config/menus"
import "./ColumnRight.css"

export function ColumnRight() {

  function onPathnameChange() {
    const menu = menus.find(menu => menu.to === location.pathname)
    if (menu) setTitle(menu.label)
  }

  const location = useLocation()
  const [title, setTitle] = useState('')

  useEffect(onPathnameChange, [location.pathname])

  return (
    <div className="ColumnRight">
      <header id="main-switch-header">
        <Title className="ColumnRight-title" level={2} color={'primary'} font={'display'}>{title}</Title>
      </header>
      <MainSwitch/>
    </div>
  )
}