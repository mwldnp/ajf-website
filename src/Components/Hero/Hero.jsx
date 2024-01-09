import React from 'react'
import ellipse from '../../Assets/ellipse.svg'
import pattern from '../../Assets/pattern.svg'
import alinea_logo from '../../Assets/LOGO_ALINEA.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
        <div className='hidden md:block'>
        <div className='h-[100vh] flex justify-center items-center absolute left-0 right-0 z-[-1]'>
            <img src={ellipse} alt="" className='h-screen'/>
        </div>
        <div className='h-[100vh] flex justify-center items-center absolute left-0 right-0 z-[-1] opacity-50'>
            <img src={pattern} alt="" />
        </div>
        </div>
        <div className='flex flex-col justify-center items-center h-screen gap-3 text-center'>
            <div className='flex items-center gap-3'>
                <img src={alinea_logo} alt="" className='w-[70px] md:w-[120px]'/>
                <span className='md:text-[18px] xl:text-[24px] font-bold'>Present</span>
            </div>
            <h1 className='text-[28px] md:text-[52px] xl:text-[72px] font-bold'>JOURNALISM FESTIVAL <br /><span className='text-transparent bg-clip-text bg-gradient-to-r from-[#4E9F3D] to-[#D8E9A8]'>COMPETITION</span></h1>
            <p className='text-[14px] md:text-[18px] xl:text-[24px] opacity-70'>— Celebrating World Press Freedom Day —</p>
            <button className='mt-14 button md:px-6 md:py-3 '>
                <Link to='/competition' className='md:text-base text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#4E9F3D] to-[#D8E9A8]'>Get Started</Link>
            </button>
        </div>
    </div>
  )
}

export default Hero