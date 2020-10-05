import React, {useState} from "react"
import {useQuery} from "@apollo/client"
import {GET_EXPERIENCES} from "../../documents/ExperiencesDocument"
import {Title} from "../common/Title"
import * as moment from "moment"
import "./Experiences.css"
import AnimateHeight from "react-animate-height"
import {Text} from "../common/Text"
import {useLoadingTransition} from "../../hooks/useLoadingTransition"
import {CSSTransition} from "react-transition-group"
import {ReactComponent as PlusIcon} from "../../images/icons/plus.svg"
import {ReactComponent as MinusIcon} from "../../images/icons/minus.svg"

export function Experiences() {

  const {data: {getExperiences} = {}} = useQuery(GET_EXPERIENCES)
  const startAnimation = useLoadingTransition(!!getExperiences)
  const [currentIndexShowed, setCurrentIndexShowed] = useState(0)

  return (
    <div className="Experiences">
      {getExperiences?.map(({company, ...experience}, index) => {
        const startDate = moment(experience.from)
        const endDate = moment(experience.to)
        const showing = index === currentIndexShowed
        return (
          <CSSTransition
            key={index}
            in={startAnimation}
            classNames="Experience-animation"
            timeout={100}
          >
            <div className="Experience" style={{"--index": index}}>
              <div className="Experience-data">
                {!showing && (
                  <PlusIcon
                    className="Experience-showAction"
                    onClick={() => setCurrentIndexShowed(index)}
                  />
                )}
                {showing && (
                  <MinusIcon
                    className="Experience-showAction"
                    onClick={() => setCurrentIndexShowed(null)}
                  />
                )}
                <Title level={3} font="display" color="primary">{company.name}</Title>
                <Title className="Experience-name" level={5} font="text" color="primary" weight={300}>{experience.name}</Title>
                <AnimateHeight height={showing ? 'auto' : 0}>
                  <Text className="Experience-description">{experience.description}</Text>
                </AnimateHeight>
                <Title level={5} font="text" color="primary" weight={300}>
                  <span>{endDate.from(startDate, true)},</span>
                  <span> de </span>
                  <span>{startDate.format("MMMM YYYY")}</span>
                  <span> à </span>
                  <span>{endDate.format("MMMM YYYY")}</span>
                </Title>
              </div>
              <div className="Experience-imageContainer">
                <img className="Experience-image" src={company.imagePath} alt={company.name}/>
              </div>
            </div>
          </CSSTransition>
        )
      })}
    </div>
  )
}