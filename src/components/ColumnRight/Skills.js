import React from "react"
import "./Skills.css"
import {useQuery} from "@apollo/client"
import {GET_SKILLS} from "../../documents/SkillsDocument"
import {Title} from "../common/Title"

export function Skills() {
  const {data: {skills} = {}} = useQuery(GET_SKILLS)

  if (!skills) return null
  return (
    <div className="Skills">
      {skills.map(skill => (
        <div className="SkillItem">
          <img className="SkillItem-image" src={skill.imagePath} alt={skill.name}/>
          <div className="SkillItem-data">
            <Title className="SkillItem-name" level={4} color="primary" font="text">{skill.name}</Title>
            <span className="SkillItem-level" style={{"--level": skill.level}}/>
          </div>
        </div>
      ))}
    </div>
  )
}