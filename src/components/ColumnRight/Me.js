import React, {useContext} from "react"
import {TextsContext} from "../../contexts/textsContext"
import {Title} from "../common/Title"
import {MeInterests} from "./MeInterests"
import {Text} from "../common/Text"

export function Me() {
  const {getText} = useContext(TextsContext)
  return (
    <div className="Me">
      <Title level={4} font={'text'} color={'primary'} className={'Title-4-page'}>D'où je viens</Title>
      <Text>{getText('ME_DESCRIPTION')}</Text>
      <Title level={4} font={'text'} color={'primary'} className={'Title-4-page'}>Ce que j'aime</Title>
      <MeInterests/>
    </div>
  )
}