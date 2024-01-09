import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import "./FAQ.css";

const FAQ = () => {
  const questions = [
    {
      id: 1,
      question: "Bagaimana cara mendaftar lomba?",
      answer:
        "Anda dapat mendaftar lomba pada web AJF maupun google form pada linktree yang terdapat pada Bio Instagram @ajf.alinea",
    },
    {
      id: 2,
      question:
        "Apa saja persyaratan, ketentuan dan kriteria penilaian lomba?",
      answer:
        "Untuk detail persyaratan, ketentuan dan kriteria penilaian lomba terdapat pada guide book yang dapat di download pada web AJF",
    },
    {
      id: 3,
      question: "Berapa biaya pendaftaran lomba?",
      answer:
        "Bagi peserta yang ingin mendaftarkan diri dalam perlombaan AJF tidak akan dikenakan biaya",
    },
    {
      id: 4,
      question: "Apa saja penghargaan yang didapatkan untuk pemenang lomba?",
      answer:
        "Bagi peserta yang memenangkan lomba akan mendapatkan uang tunai dan e-sertifikat",
    },
    {
      id: 5,
      question: "Dimana tempat pengumpulan karya lomba?",
      answer:
        "Form pengumpulan karya dapat diakses pada Linktree yang terdapat pada Bio Instagram @ajf.alinea",
    },
  ];

  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
        return setSelected(null)
    }

    setSelected(i)
  };

  return (
    <div className="text-center xl:mx-[150px] mb-[100px] mx-3">
      <h1 className="text-2xl md:text-[42px] font-semibold mb-16">
        Frequently Asked Questions
      </h1>
      <ul className="flex flex-col gap-3">
        {questions.map((q, i) => {
          return (
            <li className="text-start">
              <div className="card flex items-center gap-6 w-full h-auto py-4 px-6 mb-1 cursor-pointer" onClick={() => toggle(i)}>
                {selected === i ? <FaMinus /> : <FaPlus />}
                <h1>{q.question}</h1>
              </div>
              <div className={selected === i ? 'bg-[#252625] shadow-custom rounded-md w-full h-auto py-6 px-6' : 'hidden'}>{q.answer}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FAQ;
