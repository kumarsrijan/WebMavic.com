import React from 'react'
import { teamData } from './teamData'
import TeamItem from './TeamItem'
const Team = () => {
  return (
    <ul className="teamlist">
        {teamData.map((member)=><TeamItem data = {member} key = {member.id}/>)}
    </ul>
  )
}

export default Team