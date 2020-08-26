import React from "react"
import "./Skills.css"
import {useQuery} from "@apollo/client"
import {GET_SKILLS} from "../../documents/SkillsDocument"
import {Title} from "../common/Title"
import {useLoadingTransition} from "../../hooks/useLoadingTransition"
import {CSSTransition} from "react-transition-group"

export function Skills() {
  const {data: {skills} = {}} = useQuery(GET_SKILLS)
  const startTransition = useLoadingTransition(!!skills)

  if (!skills) return null

  const favoriteSkills = skills.filter(skill => skill.isFavorite)
  const otherSkills = skills.filter(skill => !skill.isFavorite)

  const buildSkill = (skill, index) => (
    <CSSTransition
      in={startTransition}
      timeout={100}
      classNames="SkillItem-animation"
      key={index}
    >
      <div className="SkillItem">
        <img className="SkillItem-image" src={skill.imagePath} alt={skill.name}/>
        <div className="SkillItem-data">
          <Title className="SkillItem-name" level={4} color="primary" font="text">{skill.name}</Title>
          <span className="SkillItem-level" style={{"--level": skill.level}}/>
        </div>
      </div>
    </CSSTransition>
  )

  return (
    <div className="Skills">
      <Title level={4} font={'text'} color={'primary'} className={'Title-4-page'}>Ce que je préfère</Title>
      <div className="Skills-list">
        {favoriteSkills.map(buildSkill)}
      </div>
      <Title level={4} font={'text'} color={'primary'} className={'Title-4-page'}>Les autres</Title>
      <div className="Skills-list">
        {otherSkills.map(buildSkill)}
      </div>
    </div>
  )
}