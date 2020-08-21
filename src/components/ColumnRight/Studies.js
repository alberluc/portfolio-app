import React from "react"
import {ReactComponent as StudyIcon} from "../../images/icons/study.svg"
import "./Studies.css"
import {useQuery} from "@apollo/client"
import {GET_STUDIES} from "../../documents/StudiesDocument"
import {Title} from "../common/Title"
import {CSSTransition} from 'react-transition-group';
import {useLoadingTransition} from "../../hooks/useLoadingTransition"

export function Studies() {
  const {data: {getStudies} = {}} = useQuery(GET_STUDIES)
  const startTransition = useLoadingTransition(!!getStudies)
  return (
    <div className="Studies">
      <span className="Studies-line"/>
      <span className="Studies-icon">
        <StudyIcon/>
      </span>
      <div className="Studies-list">
        {getStudies?.map((study, key) => (
          <CSSTransition
            in={startTransition}
            timeout={700}
            classNames="Study-animation"
            key={key}
          >
            <div className="Study">
              <Title level={4} font="text" color="primary">{study.name}</Title>
              <Title level={5} font="text" color="primary" weight={300}>
                <span>De {study.fromYear} à {study.toYear}</span>
                <span> - </span>
                <span>{study.school.name}</span>
              </Title>
              <Title level={4} font={"display"} color={"primary"} className={"Study-degree"}>
                <span>Bac</span>
                {!!study.degree && (
                  <>
                    <span> </span>
                    <span>+{study.degree}</span>
                  </>
                )}
              </Title>
            </div>
          </CSSTransition>
        ))}
      </div>
    </div>
  )
}