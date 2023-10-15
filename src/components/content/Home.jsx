/* eslint-disable no-unused-vars */
import React from "react";
import "../../App.css";
import PropTypes from "prop-types";

const Home = ({ onItemClick }) => {
  const handleProjectsClick = () => {
    onItemClick("projects");
  };

  return (
    <div className="pt-12 sm:pt-16 px-2 sm:px-8">
      <div className="w-auto h-24 ">
        <h1 className=" typing-text font-bold text-3xl sm:text-4xl xl:text-5xl text-white">
          ¡Hola!, Soy <span className=" text-orange">Anderson Durán</span>  
        </h1>
      </div>
      <p className="my-8 sm:my-16 font-bold text-base sm:text-lg xl:text-xl text-white leading-7 sm:leading-9">
        Desarrollador web Full Stack con amplio conocimiento en JavaScript,
        HTML, CSS, React, Node.js, SQL, PostgreSQL, Sequelize, Figma, Postman,
        Tailwind, Bootstrap, Git, etc. Dispuesto al cambio y de camino hacia la
        grandeza, por eso sigo ampliando mis conocimientos en Python y
        algoritmos.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
        <div className="p-3 sm:p-10 xl:p-8 rounded-3xl bg-orange shadow-lg shadow-orange/50 text-center hover:cursor-pointer hover:scale-110 duration-300">
          <p className="text-black font-extrabold text-3xl sm:text-4xl xl:text-5xl">
            +380
          </p>
          <h2 className="text-white font-extrabold text-base sm:text-lg xl:text-xl mt-4">
            Horas de práctica
          </h2>
        </div>
        <div className="p-3 sm:p-10 xl:p-8 rounded-3xl bg-orange shadow-lg shadow-orange/50 text-center hover:cursor-pointer hover:scale-110 duration-300">
          <p className="text-black font-extrabold text-3xl sm:text-4xl xl:text-5xl">
            +300
          </p>
          <h2 className="text-white font-extrabold text-base sm:text-lg xl:text-xl mt-4">
            Horas de teoría
          </h2>
        </div>
        <button
          className="p-3 sm:p-10 xl:p-8 rounded-3xl bg-orange shadow-lg shadow-orange/50 text-center hover:scale-110 duration-300"
          onClick={handleProjectsClick}
          title="Ver Proyectos"
        >
          <p className="text-black font-extrabold text-3xl sm:text-4xl xl:text-5xl">
            +6
          </p>
          <h2 className="text-white font-extrabold text-base sm:text-lg xl:text-xl mt-4">
            Proyectos completos
          </h2>
        </button>
      </div>
    </div>
  );
};

Home.propTypes = {
  onItemClick: PropTypes.func.isRequired,
};

export default Home;
