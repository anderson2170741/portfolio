/* eslint-disable no-unused-vars */
import React from "react";
import imagen from "../../assets/image/anderson-transp.png";
import PropTypes from "prop-types";
import { FaLinkedinIn, FaWhatsapp, FaDiscord, FaGithub } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";
import "../../app.css";

const Profile = ({ onItemClick }) => {
  const handleContactClick = () => {
    onItemClick("contact");
  };
  return (
    <div className="Profile p-8 rounded-3xl xl:border-2 text-grey">
      <h1 className="mb-8 font-bold text-base sm:text-lg xl:text-xl text-white">
        <span className="text-yellow">Anderson </span>Durán
      </h1>
      <div className="ProfileBox grid justify-items-center">
        <div className="w-60 h-44  mt-16 sm:w-64 sm:h-52 sm:mt-24 rounded-3xl z-0 bg-white-rgba"></div>
        <img className="w-52 h-38 mt-[-265px] sm:w-max sm:h-max z-10 sm:mt-[-309px]" src={imagen} alt="Imagen" />

        <h1 className="font-bold text-lg sm:text-xl xl:text-2xl text-yellow ">
          Full Stack Developer
        </h1>
        <h2 className="font-bold text-base sm:text-lg xl:text-xl text-white">Frontend</h2>
        <div className="containerIcons w-56 h-10 sm:w-72 sm:h-14 my-8 flex justify-between ">
          <a
            href="https://www.linkedin.com/in/andersonduran-full-stack-developer/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 duration-300 boxIcons grid place-items-center w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 cursor-pointer bg-grey rounded-xl"
          >
            <FaLinkedinIn className="hover:text-blue w-6 h-6 sm:w-8 sm:h-8 xl:w-10 xl:h-10 text-black" />
          </a>
          <a
            href="mailto:andersonduranpc@gmail.com"
            className="hover:scale-110 duration-300 boxIcons grid place-items-center w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 cursor-pointer bg-grey rounded-xl"
          >
            <HiMailOpen className="hover:text-white w-6 h-6 sm:w-8 sm:h-8 xl:w-10 xl:h-10 text-black" />
          </a>
          <a
            href="https://wa.me/18296535179"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:scale-110 duration-300 boxIcons grid place-items-center w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 cursor-pointer bg-grey rounded-xl"
          >
            <FaWhatsapp className="hover:text-green w-6 h-6 sm:w-8 sm:h-8 xl:w-10 xl:h-10 text-black" />
          </a>
          <a
            href="https://discord.com/users/993957118652715091"
            target="_blanck"
            rel="noopener noreferrer"
            className="hover:scale-110 duration-300 boxIcons grid place-items-center w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 cursor-pointer bg-grey rounded-xl"
          >
            <FaDiscord className="hover:text-purple w-6 h-6 sm:w-8 sm:h-8 xl:w-10 xl:h-10 text-black" />
          </a>
        </div>
        <button className="hover:scale-110 duration-300 w-52 h-10 sm:w-60 sm:h-12 xl:w-64 xl:h-14 bg-yellow shadow-lg shadow-yellow/50 text-black font-extrabold sm:text-lg xl:text-xl rounded-2xl " onClick={handleContactClick}>
          Contáctame
        </button>
      </div>
    </div>
  );
};

Profile.propTypes = {
  onItemClick: PropTypes.func.isRequired, // onItemClick debe ser una función requerida
};

export default Profile;
