import React, { useState } from "react";
import contact_img from "../Assets/contact.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contacts = [
    {
      name: "Marthina",
      no: "+62 858-8699-3833",
      link: "https://api.whatsapp.com/send/?phone=%2B6285886993833&text&type=phone_number&app_absent=0",
    },
    {
      name: "Selvi",
      no: "+62 858-8248-0563",
      link: "https://api.whatsapp.com/send/?phone=%2B6285882480563&text&type=phone_number&app_absent=0",
    },
    {
      name: "Fissa",
      no: "+62 881-8644-796",
      link: "https://api.whatsapp.com/send/?phone=%2B628818644796&text&type=phone_number&app_absent=0",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with EmailJS service ID, tempolate ID, public key, and template params
    const data = {
      service_id: process.env.REACT_APP_SERVICE_ID,
      template_id: process.env.REACT_APP_TEMPLATE_ID,
      user_id: process.env.REACT_APP_PUBLIC_KEY,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Web Wizard",
        message: message,
      },
    };

    // Send the email using EmailJS
    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res.data);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="md:h-screen flex justify-center items-center md:mt-[80px] md:mx-3 mb-3 lg:m-auto lg:mt-10 mx-3 mt-[72px] ">
      <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-3 md:grid-rows-6 gap-4 ">
        <div className="rounded-md row-span-3 md:col-span-2 md:row-span-6 bg-[#252625] shadow-custom p-5 relative">
          <h1 className="text-xl md:text-2xl font-medium mb-3">Hubungi Kami</h1>
          <p className="text-sm md:text-base opacity-70 mb-5">
            Punya pertanyaan atau kritik dan saran seputar AJF? <br /> kirimkan
            melalui form dibawah ini.
          </p>
          <hr className="opacity-30" />
          <form onSubmit={handleSubmit} className="emailForm">
            <div className="flex flex-col">
              <label htmlFor="name" className="mt-5 mb-2 text-sm md:text-base">
                Username
              </label>
              <input
                type="text"
                id="name"
                value={name}
                placeholder="Your name"
                onChange={(e) => setName(e.target.value)}
                className="rounded-md bg-[#303130] border-none mb-3 text-sm md:text-base"
                required
              />

              <label htmlFor="email" className="mb-2 text-sm md:text-base">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-md bg-[#303130] border-none mb-3 text-sm md:text-base"
                required
              />
              <label htmlFor="message" className="mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                rows="5"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe what you want or ask your question ..."
                className="rounded-md bg-[#303130] border-none mb-12 text-sm md:text-base"></textarea>
              <div className="absolute bottom-3 ">
                <button
                  className="button text-sm font-medium md:text-base "
                  type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="rounded-md row-span-2 md:row-span-4 md:col-start-3 bg-[#252625] shadow-custom p-5 flex justify-center items-center">
          <img src={contact_img} alt="" className="w-3/4"/>
        </div>
        <div className="rounded-md row-span-1 md:row-span-2 md:col-start-3 md:row-start-5 bg-[#252625] shadow-custom p-5 flex flex-col justify-center gap-4">
          <h1 className="font-medium text-lg">Contact Person</h1>
          <ul className="flex flex-col gap-3">
            {contacts.map((contact) => {
              return (
                <li>
                  <Link to={contact.link} className="flex items-center gap-2 hover:underline">
                    <FaWhatsapp className="p-1 rounded-full bg-gradient-to-r from-[#1E5128] to-[#4E9F3D] text-2xl" />
                    {contact.no} ({contact.name})
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
