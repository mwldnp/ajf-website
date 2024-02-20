import React from 'react'
import HeroCompetition from '../Components/Hero/HeroCompetition'
import Timeline from '../Components/Timeline/Timeline'
import CompetitionList from '../Components/CompetitionList/CompetitionList'
import FAQ from '../Components/FAQ/FAQ'
import Section from '../Components/Section/Section'

const Competition = () => {
  return (
    <div className='my-[120px]'>
      <HeroCompetition/>
      <Section/>
      <CompetitionList/>
      <Timeline/>
      <FAQ/>
    </div>
  )
}

export default Competition