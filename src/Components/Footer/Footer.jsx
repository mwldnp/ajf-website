import React from 'react'
import logo_ajf from '../../Assets/logo_ajf.svg'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";

const Footer = () => {

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Competition', href: '/competition' },
        { name: 'About Us', href: '/aboutus' },
      ]

  return (
    <div className='text-center bg-[#1E1F1E]'>
        <div className='md:mx-[80px] xl:mx-[150px] py-8 mx-3'>
        <div className='grid place-items-center mb-5'>
            <img src={logo_ajf} alt="" width='60'onClick={() => window.scrollTo(0,0)}/>
        </div>
        <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-2xl md:text-3xl'>JOURNALISM FESTIVAL <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#4E9F3D] to-[#D8E9A8]'>COMPETITION</span></h1>
            <p className='text-sm md:text-lg'>We're looking forward to seeing your creativity at AJF Competition</p>
            <p className='text-sm md:text-base'>Follow Us On</p>
            <div className='rounded-full border-2 w-10 h-10 flex justify-center items-center m-auto hover:bg-white hover:text-black cursor-pointer mb-6'>
                <a href='https://www.instagram.com/ajf.alinea/'>
                <FaInstagram className='inline text-xl'/>
                </a>
            </div>
        </div>
        <div className='border-t border-white border-opacity-30 flex flex-col-reverse md:flex md:flex-row md:justify-between pt-6 gap-4'>
            <p className='text-xs  md:text-base'>Copyright © 2023 By Wildan</p>
            <ul className='flex gap-3 justify-center items-center'>
                {
                    navigation.map((nav, i) => {
                        return <li key={i} className='hover:font-bold'>
                            <Link to={nav.href}>{nav.name}</Link>
                        </li>
                    })
                }
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Footer