import React, {useContext, useEffect, useState} from "react"
import "./Navigation.css"
import {Arrow} from "../common/Arrow"
import {NavLink} from "react-router-dom"
import {Title} from "../common/Title"
import {useLocation, useHistory} from "react-router-dom"
import {menus} from "../../config/menus"
import {SocialsNetworks} from "./SocialsNetworks"
import {DeviceContext} from "../../contexts/deviceContext"

let toggle = true

export function Navigation() {

  function incrementIndex(value) {
      setCurrentIndex(currentIndex + value)
  }

  function onPathNameChange() {
    const currentItem = menus.find(item => item.to === location.pathname)
    setCurrentIndex(menus.indexOf(currentItem))
  }

  function changeColor() {
    const root = document.getElementById('root')

    if (toggle) {
      /*root.style.setProperty('--color-primary', '#600000')
      root.style.setProperty('--color-primary-light', 'rgb(96 0 0 / 60%)')
      root.style.setProperty('--color-secondary', '#ffd2d2')
      root.style.setProperty('--color-secondary-light', 'rgb(255 210 210 / 85%)')
      root.style.setProperty('--color-tertiary', '#fff3f3')
      root.style.setProperty('--color-quaternary', '#fff')
      root.style.setProperty('--light-box-shadow', '2px 2px 10px #ffebeb')*/
    } else {
      /*root.style.setProperty('--color-primary', 'rgba(0, 15, 96, 1)')
      root.style.setProperty('--color-primary-light', 'rgba(0, 15, 96, .6)')
      root.style.setProperty('--color-secondary', '#D2E4FF')
      root.style.setProperty('--color-secondary-light', 'rgba(210, 228, 255, 0.85)')
      root.style.setProperty('--color-tertiary', '#F3FBFF')
      root.style.setProperty('--color-quaternary', '#FFF')
      root.style.setProperty('--light-box-shadow', '2px 2px 10px #EBF3FF')*/
    }

    toggle = !toggle
  }

  function onCurrentIndexChange() {
    const newItem = menus[currentIndex]
    if (newItem && currentIndex !== lastIndex) {
      changeColor()
      history.push(newItem.to)
    }
    setLastIndex(currentIndex)
    document.body.classList.remove('is-menu-active')
  }

  const location = useLocation()
  const history = useHistory()
  const [lastIndex, setLastIndex] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const {device} = useContext(DeviceContext)
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
      {device === 'phone' && <SocialsNetworks/>}
    </div>
  )
}