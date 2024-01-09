import React from 'react'
import {Link} from 'react-router-dom'

const HeroCompetition = () => {
  return (
    <div className='text-center mx-8 md:m-auto md:my-[150px] md:w-[80%] lg:w-[60%]'>
        <h1 className='text-2xl font-semibold'>We're looking forward to seeing your <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#4E9F3D] to-[#D8E9A8]'>creativity</span></h1>
        <p className='text-sm md:text-base xl:text-xl mt-6'>
        Alinea Journalism Festival (AJF) diselenggarakan untuk memeriahkan hari PERS yang terdiri dari festival lomba dan workshop yang berkaitan dengan jurnalistik.
        </p>
        <p className='mt-4 italic opacity-70 text-sm md:text-base'>
        Jangan lupa daftarkan diri anda dan download buku panduan perlombaan!
        </p>
        <div className='flex flex-col md:flex-row justify-center items-center gap-4 mt-12'>
            <button className='button md:px-6 md:py-3 '>
                <Link to='https://drive.google.com/file/d/10hJjA3ZksOsPu2IW8L6tF-6Iw1abtaCf/view?usp=drive_link' className='md:text-base text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#4E9F3D] to-[#D8E9A8]'>
                    Download Guide Book
                </Link>
            </button>
            <button className='border-2 rounded-full px-5 py-2 font-medium border-[#4E9F3D] text-[#4E9F3D] hover:bg-[#4E9F3D] hover:text-white text-sm md:text-base'>
                <Link to='https://docs.google.com/forms/d/e/1FAIpQLSeLYPTZ7kLrPp2FEUsv29weIgDSdMhP1lp79ziJ_rj5QzGRFA/closedform'>Daftar Lomba</Link>
            </button>
        </div>
    </div>
  )
}

export default HeroCompetition