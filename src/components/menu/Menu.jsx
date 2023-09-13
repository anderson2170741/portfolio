/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { AiFillHome } from "react-icons/ai";
import { FaFileCode, FaBriefcase, FaMobile } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import "../../App.css";
import cv from "../../assets/pdf/CV.pdf";

const Menu = ({ onItemClick, activeSection }) => {
  const menuItems = [
    { id: "home", icon: <AiFillHome className="text-2xl  md:text-4xl" /> },
    { id: "skills", icon: <FaFileCode className="text-2xl  md:text-4xl" /> },
    { id: "projects", icon: <FaBriefcase className="text-2xl md:text-4xl" /> },
    { id: "qualities", icon: <PiCertificateFill className="text-2xl md:text-4xl" /> },
    { id: "contact", icon: <FaMobile className="text-2xl md:text-4xl"  /> },
  ];

  return (
    <div className="rounded-3xl border-2 text-grey bg-black flex xl:flex-col mx-auto lg:ml-auto lg:mr-auto">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className={`menu-item ${
            activeSection === item.id ? "active" : ""
          } w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 grid place-items-center hover:scale-150 duration-300`}
          onClick={() => onItemClick(item.id)}
        >
          <div className="icon-container cursor-pointer ">
            {item.id === "contact" ? (
              <div className="relative">
                <span className="absolute top-0 right-0 w-2 h-2 md:w-4 md:h-4 flex items-center justify-center bg-red-600 rounded-full">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                </span>
                {item.icon}
              </div>
            ) : (
              item.icon
            )}
          </div>
        </div>
      ))}
      <a
        href={cv}
        download="CV-Anderson-Duran.pdf"
        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 font-bold text-2xl md:text-3xl grid place-items-center cursor-pointer hover:scale-125 duration-300"
      >
        CV
      </a>
    </div>
  );
};

Menu.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  activeSection: PropTypes.string.isRequired,
};

export default Menu;

