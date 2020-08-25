import React, {createContext, useEffect, useState} from "react"
import {MainSwitch} from "../MainSwitch"
import {Title} from "../common/Title"
import {Link, useLocation} from "react-router-dom"
import {menus} from "../../config/menus"
import {ReactComponent as DotsBackground} from "../../images/Bulles.svg"
import "./ColumnRight.css"
import {Arrow} from "../common/Arrow"

export const ColumnRightContext = createContext(null)

export function ColumnRight() {

  function onPathnameChange() {
    const menu = menus.find(menu => menu.to === location.pathname)
    if (menu) setTitle(menu.label)
  }

  const location = useLocation()
  const [title, setTitle] = useState('')
  const [returnTo, setReturnTo] = useState(null)

  useEffect(onPathnameChange, [location.pathname])

  return (
    <ColumnRightContext.Provider value={{setTitle, setReturnTo}}>
      <div className="ColumnRight">
        <DotsBackground className="ColumnRight-dots"/>
        <div className="ColumnRight-content">
          {returnTo && (
            <Link className="ColumnRight-returnLink" to={returnTo}>
              <Arrow className="ColumnRight-return" direction="left"/>
            </Link>
          )}
          <header id="main-switch-header">
            <Title className="ColumnRight-title" level={3} color={'primary'} font={'display'}>{title}</Title>
          </header>
          <MainSwitch/>
        </div>
      </div>
    </ColumnRightContext.Provider>
  )
}