import React, {useContext, useEffect} from "react"
import {useRouteMatch} from "react-router-dom"
import {useQuery} from "@apollo/client"
import {GET_PROJECT} from "../../documents/ProjectsDocument"
import {ColumnRightContext} from "./ColumnRight"
import "./ProjectItem.css"
import {Text} from "../common/Text"
import {Title} from "../common/Title"
import moment from "moment"

export function ProjectItem() {
  const match = useRouteMatch()
  const {setTitle, setReturnTo} = useContext(ColumnRightContext)
  const {data: {getProject} = {}} = useQuery(GET_PROJECT, {
    variables: {
      _id: match.params.id
    }
  })

  useEffect(
    () => {
      if (getProject) setTitle(getProject.name)
    },
    [getProject, setTitle]
  )

  useEffect(
    () => {
      setReturnTo({pathname: "/projects"})
      return () => setReturnTo(null)
    },
    [setReturnTo]
  )

  if (!getProject) return null

  return (
    <div className="ProjectItem">
      <header className="ProjectItem-header">
        <div className="ProjectItem-gallery">
          <img className="ProjectItem-image" src={getProject.imagePath} alt={getProject.name}/>
        </div>
        <div className="ProjectItem-data">
          <div className="ProjectItem-data-top">
            <Title level={4} font="text" color="primary">
              {!getProject.context && (
                <span>Projet personnel</span>
              )}
              {!!getProject.context && (
                <>
                  <span>{getProject.context.name}</span>
                  <span> à </span>
                  {getProject.context.__typename === "Study" && (
                    <span>{getProject.context.school.name}</span>
                  )}
                  {getProject.context.__typename === "Experience" && (
                    <span>{getProject.context.company.name}</span>
                  )}
                </>
              )}
            </Title>
            <Title className="ProjectItem-duration" level={5} font="text" weight={300} color="primary">{`${moment(getProject.startDate).format("MMMM YYYY")} - ${getProject.duration}`} mois</Title>
          </div>
          <div className="ProjectItem-data-bottom">
            {!!getProject.githubUrl && (
              <a className="Project-externalLink" target="_blank" rel="noreferrer noopener" href={getProject.githubUrl}>
                <Title level={5} color="primary" weight={300} font="text">Dossier Git</Title>
              </a>
            )}
            {!!getProject.documentsUrl && (
              <a className="Project-externalLink" target="_blank" rel="noreferrer noopener" href={getProject.documentsUrl}>
                <Title level={5} color="primary" weight={300} font="text">Documents annexes</Title>
              </a>
            )}
            {!!getProject.webSiteUrl && (
              <a className="Project-externalLink" target="_blank" rel="noreferrer noopener" href={getProject.webSiteUrl}>
                <Title level={5} color="primary" weight={300} font="text">Site web</Title>
              </a>
            )}
          </div>
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