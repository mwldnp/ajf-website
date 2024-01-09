import React from 'react'
import ajf_logo from '../Assets/logo_ajf.svg'

const AboutUs = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center mx-5 md:mx-[100px] xl:mx-[200px] gap-14'>
      <div className='text-center pt-[80px] md:pt-0'>
        <h1 className='md:text-3xl text-2xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#4E9F3D] to-[#D8E9A8]'>Our Story</h1>
        <p className='text-sm md:text-base'>Alinea Journalism Festival (AJF) merupakan event tahunan yang diadakan oleh UKM Alinea. AJF dibangun pada tahun 2023 dan disenggelarakan untuk memeriahkan hari PERS yang terdiri dari festival lomba dan workshop yang berkaitan dengan jurnalistik. </p>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center gap-8 text-center md:text-start'>
        <div className='flex-1'>
          <img src={ajf_logo} alt="" className='m-auto w-28 md:w-auto'/>
        </div>
        <div className='flex-1 mb-6'>
          <h1 className='md:text-3xl text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#4E9F3D] to-[#D8E9A8]'>Our Logo</h1>
          <p className='text-sm md:text-base'>Bentuk logo diambil dari huruf “AJF”. Warna gradasi dipilih sebagai bentuk peralihan komposisi satu ke komposisi lainnya yang merupakan manifestasi dari AJF untuk menjadi wadah peningkatan.</p>
          <br />
          <p className='text-sm md:text-base'>Penggunaan warna hijau, biru, kuning, dan merah sebagai penggabungan dari pertumbuhan, kreatifitas, dan harapan dalam berkarya.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs