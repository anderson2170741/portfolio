/* eslint-disable no-unused-vars */
import React from "react";
import "../../App.css";
import PropTypes from "prop-types";

const Home = ({ onItemClick, darkMode }) => {
  const handleProjectsClick = () => {
    onItemClick("projects");
  };

  return (
    <div className={`pt-12 sm:pt-16 px-2 sm:px-8 ${darkMode ? 'bg-veryDark' : 'bg-white'}`}>
      <div className="w-auto">
        <h1 className={`typing-text font-bold text-3xl sm:text-4xl xl:text-5xl ${darkMode ? 'text-white' : 'text-veryDark'}`}>
          ¡Hola!, Soy <span className={`text-orange`}>Anderson Durán</span>  
        </h1>
      </div>
      <p className={`my-8 sm:my-16 font-bold text-base sm:text-lg xl:text-xl ${darkMode ? 'text-white' : 'text-veryDark'} leading-7 sm:leading-9`}>
        Desarrollador web Full Stack con amplio conocimiento en JavaScript,
        HTML, CSS, React, Node.js, SQL, PostgreSQL, Sequelize, Figma, Postman,
        Tailwind, Bootstrap, Git, etc. Dispuesto al cambio y de camino hacia la
        grandeza, por eso sigo ampliando mis conocimientos en Python y
        algoritmos.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
        <div className={`p-3 sm:p-10 xl:p-8 rounded-3xl bg-orange shadow-lg shadow-orange/50 text-center hover:cursor-pointer hover:scale-110 duration-300 ${darkMode ? 'text-white' : 'text-veryDark'}`}>
          <p className={`font-extrabold text-3xl sm:text-4xl xl:text-5xl ${darkMode ? 'text-veryDark' : 'text-white'}`}>
            +380
          </p>
          <h2 className="font-extrabold text-base sm:text-lg xl:text-xl mt-4">
            Horas de práctica
          </h2>
        </div>
        <div className={`p-3 sm:p-10 xl:p-8 rounded-3xl bg-orange shadow-lg shadow-orange/50 text-center hover:cursor-pointer hover:scale-110 duration-300 ${darkMode ? 'text-white' : 'text-veryDark'}`}>
          <p className={`font-extrabold text-3xl sm:text-4xl xl:text-5xl ${darkMode ? 'text-veryDark' : 'text-white'}`}>
            +300
          </p>
          <h2 className="font-extrabold text-base sm:text-lg xl:text-xl mt-4">
            Horas de teoría
          </h2>
        </div>
        <button
          className={`p-3 sm:p-10 xl:p-8 rounded-3xl bg-orange shadow-lg shadow-orange/50 text-center hover:scale-110 duration-300 ${darkMode ? 'text-white' : 'text-veryDark'}`}
          onClick={handleProjectsClick}
          title="Ver Proyectos"
        >
          <p className={`font-extrabold text-3xl sm:text-4xl xl:text-5xl ${darkMode ? 'text-veryDark' : 'text-white'}`}>
            +6
          </p>
          <h2 className="font-extrabold text-base sm:text-lg xl:text-xl mt-4">
            Proyectos completos
          </h2>
        </button>
      </div>
    </div>
  );
};

Home.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default Home;

