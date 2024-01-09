import React from 'react'
import './Timeline.css'
import { Link } from 'react-router-dom'

const Timeline = () => {
  return (
    <div className='my-[120px] ml-3 md:ml-0'>
        <div className='text-2xl md:text-[42px] font-semibold text-center relative'>Timeline</div>
        
        {/* Timeline */}
        <div className="container">
          <ul>
            <li>
              <h3 className='title'>Pendaftaran</h3>
              <p>Peserta melakukan pendaftaran melalui link yang telah disediakan</p>
              <button className='border-2 mt-3 rounded-full px-3 py-2 font-medium border-[#4E9F3D] text-[#4E9F3D] hover:bg-[#4E9F3D] hover:text-white text-xs md:text-sm'>
                <Link to='https://docs.google.com/forms/d/e/1FAIpQLSeLYPTZ7kLrPp2FEUsv29weIgDSdMhP1lp79ziJ_rj5QzGRFA/closedform'>Apply Now</Link>
            </button>
              
              <span className='circle'></span>
              <span className='date'>25 Nov 2023 - 7 Jan 2024</span>
            </li>
            <li>
              <h3 className='title'>Pengumpulan Karya</h3>
              <p>Peserta mengumpulkan karya melalui link yang sudah disediakan</p>
              <span className='circle'></span>
              <span className='date'>3 Des 2023 - 7 Jan 2024</span>
            </li>
            <li>
              <h3 className='title'>Penjurian</h3>
              <p>Juri melakukan penilaian karya-karya yang telah dikirim oleh peserta</p>
              <span className='circle'></span>
              <span className='date'>10 Jan 2024 - 5 Feb 2024</span>
            </li>
            <li>
              <h3 className='title'>Pengumuman</h3>
              <p>Pengumuman pemenang lomba akan di bagikan memalui instagram <a href="https://www.instagram.com/ajf.alinea/" className='font-medium text-[#D8E9A8] '>@ajf.alinea</a></p>
              <span className='circle'></span>
              <span className='date'>24 Februari 2024</span>
            </li>
          </ul>
        </div>

    </div>
  )
}

export default Timeline