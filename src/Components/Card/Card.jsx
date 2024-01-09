import React from 'react'

const Card = (props) => {
  return (
    <div className='card flex flex-col justify-center items-center px-2 text-center hover:scale-105 transition'>

        <img src={props.image} alt={props.image} />
        <h1 className='mt-8 text-lg md:text-xl font-medium'>
        {props.title}
        </h1>
        <p className='mt-3 text-sm md:text-base'>({props.category})</p>

    </div>
  )
}

export default Card