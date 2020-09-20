import React, {useEffect, useState} from "react"
import "./Navigation.css"
import {Arrow} from "../common/Arrow"
import {NavLink} from "react-router-dom"
import {Title} from "../common/Title"
import {useLocation, useHistory} from "react-router-dom"
import {menus} from "../../config/menus"

export function Navigation() {

  function incrementIndex(value) {
      setCurrentIndex(currentIndex + value)
  }

  function onPathNameChange() {
    const currentItem = menus.find(item => item.to === location.pathname)
    setCurrentIndex(menus.indexOf(currentItem))
  }

  function onCurrentIndexChange() {
    const newItem = menus[currentIndex]
    if (newItem && currentIndex !== lastIndex) {
      history.push(newItem.to)
    }
    setLastIndex(currentIndex)
    document.body.classList.remove('is-menu-active')
  }

  const location = useLocation()
  const history = useHistory()
  const [lastIndex, setLastIndex] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const isLastSelected = currentIndex === menus.length - 1
  const isFirstSelected = currentIndex === 0

  useEffect(onPathNameChange, [location.pathname])
  useEffect(onCurrentIndexChange, [currentIndex])

  return (
    <div className="Navigation">
      <Arrow
        direction={'up'}
        disabled={isFirstSelected}
        onClick={() => incrementIndex(-1)}
      />
      <nav className="Navigation-list">
        {menus.map(item => (
          <NavLink key={item.to} className="Navigation-item" to={item.to}>
            <Title level={4} font={'display'}>{item.label}</Title>
          </NavLink>
        ))}
      </nav>
      <Arrow
        direction={'down'}
        disabled={isLastSelected}
        onClick={() => incrementIndex(1)}
      />
    </div>
  )
}