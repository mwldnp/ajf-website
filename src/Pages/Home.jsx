import React from 'react'
import Hero from '../Components/Hero/Hero'
import CompetitionCard from '../Components/CompetitionCard/CompetitionCard'
import Timeline from '../Components/Timeline/Timeline'
import FAQ from '../Components/FAQ/FAQ'

const Home = () => {
  return (
    <div>
        <Hero/>
        <CompetitionCard/>
        <Timeline/>
        <FAQ/>
    </div>
  )
}

export default Home