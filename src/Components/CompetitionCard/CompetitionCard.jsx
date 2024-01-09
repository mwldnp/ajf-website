import React from 'react'
import datas from '../../Assets/datas'
import Card from '../Card/Card'

const CompetitionCard = () => {
  return (
    <div className='text-center xl:mx-[150px]'>
        <h1 className='text-2xl md:text-[42px] font-semibold mb-16'>Competitions</h1>
        <div className='flex flex-wrap justify-center items-center gap-10 '>
        {
          datas.map((e, i) => {
            return <Card key={i} title={e.title} image={e.image} category={e.category}/>
          })
        }
        </div>
    </div>
  )
}

export default CompetitionCard