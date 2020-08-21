import React from "react"
import "./Header.css"
import {Avatar} from "./Avatar.js"
import {Title} from "../common/Title"
import {SocialsNetworks} from "./SocialsNetworks"

export function Header() {
  return (
    <header className="Header">
      <Avatar/>
      <div className="Header-data">
        <Title level={1} color={'primary'} font={'display'}>Lucien Albert</Title>
        <Title level={4} color={'primary'} font={'text'} weight={300}>Développeur web</Title>
        <SocialsNetworks/>
      </div>
    </header>
  )
}