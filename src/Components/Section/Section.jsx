import React from "react";
import poster from "../../Assets/poster.jpg";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <div className="md:flex justify-center items-center mx-8 md:m-auto md:w-[80%] lg:w-[70%] gap-[100px] mt-[64px] md:mt-6 ">
      <div className="md:w-[60%]">
        <h1 className="text-2xl md:text-3xl font-bold mb-3">Talkshow AJF'S TALK</h1>
        <p className="mb-3 leading-[160%] text-sm md:text-base">
          Puncak serangkaian acara AJF akan segera tiba! Dengan berkolaborasi bersama <span className="font-bold hover:underline"><a href="https://yoursay.suara.com/">yoursay.id</a></span>, Alinea Journalism Festival menghadirkan narasumber menarik dan penampilan live music yang seru 🚀
        </p>
        <p className="mb-7 text-sm md:text-base">
          Selain itu, hasil AJF Competition juga akan diumumkan pada acara ini, lho. Nantikan keseruannya pada 24 Februari nanti. So, let's register yourself now ✒️
        </p>
        <button className="border-2 rounded-full px-5 py-2 font-medium border-[#4E9F3D] text-[#4E9F3D] hover:bg-[#4E9F3D] hover:text-white text-sm md:text-base">
          <Link to='https://goers.co/ajf2024'>
          Daftar Sekarang
          </Link>
        </button>
      </div>
      <div className="md:w-[40%] mt-6 md:mt-0">
        <img src={poster} alt="" />
      </div>
    </div>
  );
};

export default Section;
