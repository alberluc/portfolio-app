import React from "react"
import {createPortal} from 'react-dom'
import {useRouteMatch} from "react-router-dom"
import {useQuery} from "@apollo/client"
import {GET_PROJECT} from "../../documents/ProjectsDocument"
import {Title} from "../common/Title"

export function ProjectItem() {
  const match = useRouteMatch()
  const {data: {getProject} = {}} = useQuery(GET_PROJECT, {
    variables: {
      _id: match.params.id
    }
  })
  return !getProject || (
    <div className="ProjectItem">
      <Title level={3} color="primary" font="display">{getProject.name}</Title>
    </div>
  )
}