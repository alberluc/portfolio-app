import React from "react"
import {useQuery} from "@apollo/client"
import {GET_EXPERIENCES} from "../../documents/ExperiencesDocument"
import {Title} from "../common/Title"
import * as moment from 'moment'
import './Experiences.css'
import {Text} from "../common/Text"

export function Experiences() {
  const {data: {getExperiences} = {}} = useQuery(GET_EXPERIENCES)
  return (
    <div className="Experiences">
      {getExperiences?.map(({company, ...experience}) => {
        const startDate = moment(experience.from);
        const endDate = moment(experience.to);
        return (
          <div className="Experience">
            <div className="Experience-data">
              <Title level={3} font="display" color="primary">{company.name}</Title>
              <Title className="Experience-name" level={5} font="text" color="primary" weight={300}>{experience.name}</Title>
              <Text className="Experience-description">{experience.description}</Text>
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
        )
      })}
    </div>
  )
}