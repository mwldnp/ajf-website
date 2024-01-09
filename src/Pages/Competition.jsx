import React from 'react'
import HeroCompetition from '../Components/Hero/HeroCompetition'
import Timeline from '../Components/Timeline/Timeline'
import CompetitionList from '../Components/CompetitionList/CompetitionList'
import FAQ from '../Components/FAQ/FAQ'

const Competition = () => {
  return (
    <div className='my-[120px]'>
      <HeroCompetition/>
      <CompetitionList/>
      <Timeline/>
      <FAQ/>
    </div>
  )
}

export default Competition