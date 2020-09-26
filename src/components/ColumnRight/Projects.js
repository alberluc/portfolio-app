import React from "react"
import {Label} from "../common/Label"
import {Select} from "../common/Select"
import {useQuery} from "@apollo/client"
import {GET_PROJECTS} from "../../documents/ProjectsDocument"
import "./Projects.css"
import {Title} from "../common/Title"
import {PrimaryLine} from "../common/PrimaryLine"
import {Link} from "react-router-dom"
import {useLoadingTransition} from "../../hooks/useLoadingTransition"
import {CSSTransition} from "react-transition-group"

export function Projects() {

  const {data: {projects} = {}} = useQuery(GET_PROJECTS)
  const startAnimation = useLoadingTransition(!!projects)

  return (
    <>
      <div className="Projects-filters">
        <div className="Projects-filters-cell">
          <Label>Type :</Label>
        </div>
        <div className="Projects-filters-cell">
          <Select>
            <option value="All">Tous</option>
            <option value="Personal">Personnels</option>
            <option value="Experience">Entreprise</option>
            <option value="Study">Ecole</option>
          </Select>
        </div>
      </div>
      <CSSTransition
        in={startAnimation}
        classNames="Projects-animation"
        timeout={100}
      >
        <div className="Projects">
          {projects?.map(project => (
            <Link key={project._id} className="Project-link" to={`/projects/${project._id}`}>
              <article className="Project">
                <img className="Project-image" src={project.imagePath} alt={project.name}/>
                <main className="Project-main">
                  <Title level={4} color="primary" font="display">{project.name}</Title>
                  <PrimaryLine/>
                  {!project.context && (
                    <>
                      <Title level={5} color="primary" font="text" weight={500}>Projet personnel</Title>
                    </>
                  )}
                  {project.context?.__typename === 'Experience' && (
                    <>
                      <Title level={5} color="primary" font="text" weight={500}>{project.context.name}</Title>
                      <Label>{project.context.company.name}</Label>
                    </>
                  )}
                  {project.context?.__typename === 'Study' && (
                    <>
                      <Title level={5} color="primary" font="text" weight={500}>{project.context.name}</Title>
                      <Label>{project.context.school.name}</Label>
                    </>
                  )}
                </main>
              </article>
            </Link>
          ))}
        </div>
      </CSSTransition>
    </>
  )
}