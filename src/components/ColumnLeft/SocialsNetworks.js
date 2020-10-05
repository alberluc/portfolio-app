import React from "react"
import "./SocialsNetworks.css"
import {ReactComponent as CodepenIcon} from "./../../images/icons/codepen.svg"
import {ReactComponent as GithubIcon} from "./../../images/icons/github.svg"
import {ReactComponent as LinkedInIcon} from "./../../images/icons/linkedin.svg"
import {ReactComponent as MailIcon} from "./../../images/icons/mail.svg"
import {ReactComponent as CVIcon} from "./../../images/icons/cv.svg"

export function SocialsNetworks() {
  return (
    <div className="SocialsNetworks">
      <a rel="noopener noreferrer" target="_blank" href="https://codepen.io/lulubeerlu" data-tooltip="Codepen">
        <CodepenIcon/>
      </a>
      <a rel="noopener noreferrer" target="_blank" href="https://github.com/alberluc" data-tooltip="Github">
        <GithubIcon/>
      </a>
      <a rel="noopener noreferrer" target="_blank" href="https://fr.linkedin.com/in/lucien-albert-ba26bb132" data-tooltip="LinkedIn">
        <LinkedInIcon/>
      </a>
      <a rel="noopener noreferrer" target="_blank" href="mailto:lucienalbert.pro@gmail.com" data-tooltip="lucienalbert.pro@gmail.com">
        <MailIcon/>
      </a>
      <a rel="noopener noreferrer" target="_blank" href="https://api.lucienalbert.fr/static/files/cv.pdf#view=fit" data-tooltip="CV">
        <CVIcon/>
      </a>
    </div>
  )
}