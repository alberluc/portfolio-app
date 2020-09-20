import React, {useContext} from "react"
import "./Header.css"
import {Avatar} from "./Avatar.js"
import {Title} from "../common/Title"
import {SocialsNetworks} from "./SocialsNetworks"
import {DeviceContext} from "../../contexts/deviceContext"

export function Header() {

  function onClickHeaderMenu() {
    document.body.classList.add('is-menu-active')
  }

  const {device} = useContext(DeviceContext)

  return (
    <header className="Header">
      {device === 'phone' && (
        <div className="Header-menu" onClick={onClickHeaderMenu}>
          <div className="Header-menu-bar"/>
          <div className="Header-menu-bar"/>
          <div className="Header-menu-bar"/>
        </div>
      )}
      <Avatar/>
      <div className="Header-data">
        <div className="Header-titles">
          <Title level={1} color={'primary'} font={'display'}>Lucien Albert</Title>
          <Title level={4} color={'primary'} font={'text'} weight={300}>Développeur web</Title>
        </div>
        {device !== 'phone' && <SocialsNetworks/>}
      </div>
      {device === 'phone' && <SocialsNetworks/>}
    </header>
  )
}