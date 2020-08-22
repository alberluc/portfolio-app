import React, {useContext, useEffect} from "react"
import {useRouteMatch} from "react-router-dom"
import {useQuery} from "@apollo/client"
import {GET_PROJECT} from "../../documents/ProjectsDocument"
import {ColumnRightContext} from "./ColumnRight"
import "./ProjectItem.css"
import {Text} from "../common/Text"
import {Title} from "../common/Title"

export function ProjectItem() {
  const match = useRouteMatch()
  const {setTitle} = useContext(ColumnRightContext)
  const {data: {getProject} = {}} = useQuery(GET_PROJECT, {
    variables: {
      _id: match.params.id
    }
  })
  
  useEffect(() => {if (getProject) setTitle(getProject.name)}, [getProject, setTitle])
  
  if (!getProject) return null
  
  return (
    <div className="ProjectItem">
      <header className="ProjectItem-header">
        <div className="ProjectItem-gallery">
          <img className="ProjectItem-image" src={getProject.imagePath} alt={getProject.name}/>
        </div>
        <div className="ProjectItem-data">
          <Title level={4} font="text" color="primary">
            <span>{getProject.context.name}</span>
            <span> à </span>
            {getProject.context.__typename === 'Study' && (
              <span>{getProject.context.school.name}</span>
            )}
            {getProject.context.__typename === 'Experience' && (
              <span>{getProject.context.company.name}</span>
            )}
          </Title>
          <Title className="ProjectItem-duration" level={5} font="text" color="primary">{getProject.duration} mois</Title>
        </div>
      </header>
      <main>
        <div className="ProjectItem-description">
          <Text>{getProject.description}</Text>
        </div>
        <div className="ProjectItem-skills">
          {getProject.skills.map((skill, index) => (
            <div key={index} className="ProjectItem-skillsItem">
              <Text>{skill.name}</Text>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}