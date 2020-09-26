import React from "react"
import {useQuery} from "@apollo/client"
import {GET_INTERESTS} from "../../documents/InterestsDocument"
import "./MeInterests.css"
import {Title} from "../common/Title"
import {Text} from "../common/Text"
import {useLoadingTransition} from "../../hooks/useLoadingTransition"
import {CSSTransition} from "react-transition-group"

export function MeInterests() {

  const {data: {getInterests} = {}} = useQuery(GET_INTERESTS)
  const startTransition = useLoadingTransition(!!getInterests)

  return (
    <div className="MeInterests">
        {getInterests?.map((interest, index) => (
          <CSSTransition
            in={startTransition}
            timeout={100}
            key={index}
            classNames="Interest-animation"
          >
          <div className="Interest" style={{'--index': index}}>
            <img className="Interest-image" src={interest.imagePath} alt={interest.name}/>
            <div className="Interest-data">
              <Title className="Interest-title" level={4} color="primary" font="display">{interest.name}</Title>
              <Text className="Interest-description">{interest.description}</Text>
            </div>
          </div>
          </CSSTransition>
        ))}
    </div>
  )
}