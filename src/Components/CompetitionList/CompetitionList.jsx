import React, { useState } from "react";
import datas from "../../Assets/datas";
import "./CompetitionList.css";

const CompetitionList = () => {
  const [toggle, setToggle] = useState("SMA/Sederajat");
  const [active, setActive] = useState(1);

  const updateToggle = (category) => {
    setToggle(category);
  };

  const isActive = (id) => {
    setActive(id);
  };

  return (
    <div className="my-[120px] xl:mx-[100px] md:mx-5">
      <div className="text-2xl md:text-[42px] font-semibold text-center">
        Competitions
      </div>
      <ul className="flex flex-col mx-3 sm:mx-0 sm:flex-row justify-center items-center mt-8 gap-4 tab">
        <li
          className={active === 1 ? "active" : "non-active"}
          onClick={() => {
            updateToggle("SMA/Sederajat");
            isActive(1);
          }}>
          SMA/Sederajat
        </li>
        <li
          className={active === 2 ? "active" : "non-active"}
          onClick={() => {
            updateToggle("Mahasiswa");
            isActive(2);
          }}>
          Mahasiswa
        </li>
        <li
          className={active === 3 ? "active" : "non-active"}
          onClick={() => {
            updateToggle("SMA/Sederajat & Mahasiswa");
            isActive(3);
          }}>
          SMA/Sederajat & Mahasiswa
        </li>
      </ul>
      <div className="flex flex-wrap justify-center items-center gap-10 mt-[50px] xl:mx-[150px] ">
        {datas.map((data, i) => {
          return (
            <div
              className={toggle === data.category ? "show-content" : "content"}>
              <div className="flex flex-col lg:flex-row gap-8 items-center xl:items-start">
                <div className="md:w-1/2 grid place-content-center">
                  <div className="card w-[300px] h-[300px] grid place-content-center"> 
                  <img src={data.image} alt=""/>
                  </div>
                </div>
                <div className="flex flex-col gap-3 mx-3">
                  <h1 className="md:text-2xl font-semibold text-xl text-center md:text-start">{data.title}</h1>
                  <p className="text-base md:text-xl md:text-start text-center">Tema : {data.tema}</p>
                  <p className="text-base md:text-xl">Syarat : </p>
                  <ul className="list-disc">
                    {data.list.map((item, i) => {
                      return <li key={i} className="ml-4 mb-[8px]">{item}</li>;
                    })}
                  </ul>
                  <p>
                    <span className="font-bold">*note</span> : Surat pernyataan keaslian karya dan form pengumpulan
                    karya dapat diakses pada Linktree yang terdapat di Bio
                    Instagram{" "}
                    <a
                      href="https://www.instagram.com/ajf.alinea/"
                      className="font-medium text-[#D8E9A8] ">
                      @ajf.alinea
                    </a>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompetitionList;
