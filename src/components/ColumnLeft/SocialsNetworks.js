import React from "react"
import "./SocialsNetworks.css"
import {ReactComponent as CodepenIcon} from "./../../images/icons/codepen.svg"
import {ReactComponent as GithubIcon} from "./../../images/icons/github.svg"
import {ReactComponent as LinkedInIcon} from "./../../images/icons/linkedin.svg"
import {ReactComponent as MailIcon} from "./../../images/icons/mail.svg"

export function SocialsNetworks() {
  return (
    <div className="SocialsNetworks">
      <a rel="noopener noreferrer" target="_blank" href="https://codepen.io/lulubeerlu">
        <CodepenIcon/>
      </a>
      <a rel="noopener noreferrer" target="_blank" href="https://github.com/alberluc">
        <GithubIcon/>
      </a>
      <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/lucien-albert-ba26bb132">
        <LinkedInIcon/>
      </a>
      <a rel="noopener noreferrer" target="_blank" href="mailto:lucienalbert.pro@gmail.com">
        <MailIcon/>
      </a>
    </div>
  )
}