import React from "react"
import {Redirect, Route, Switch} from "react-router-dom"
import {Me} from "./ColumnRight/Me"
import {Studies} from "./ColumnRight/Studies"
import {Experiences} from "./ColumnRight/Experiences"
import {Projects} from "./ColumnRight/Projects"
import {Skills} from "./ColumnRight/Skills"
import {ProjectItem} from "./ColumnRight/ProjectItem"

export function MainSwitch() {
  return (
    <Switch className="MainSwitch">
      <Route path="/me">
        <Me/>
      </Route>
      <Route path="/studies">
        <Studies/>
      </Route>
      <Route path="/experiences">
        <Experiences/>
      </Route>
      <Route path="/projects/:id">
        <ProjectItem/>
      </Route>
      <Route path="/projects">
        <Projects/>
      </Route>
      <Route path="/skills">
        <Skills/>
      </Route>
      <Route path="/">
        <Redirect to="/me"/>
      </Route>
    </Switch>
  )
}