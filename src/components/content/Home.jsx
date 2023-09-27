/* eslint-disable no-unused-vars */
import React from "react";
import "../../App.css";

const Home = () => {
  return (
    <div className="pt-12 sm:pt-16 px-2 sm:px-8">
      <div className="">
        <h1 className=" typing-text font-bold text-3xl sm:text-4xl xl:text-5xl text-white">
          <span className=" text-yellow">¡Hola!</span>, Soy Anderson Durán
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
        <div className="p-3 sm:p-10 xl:p-8 rounded-3xl bg-yellow shadow-lg shadow-yellow/50 text-center">
          <p className="text-black font-extrabold text-3xl sm:text-4xl xl:text-5xl">
            +180
          </p>
          <h2 className="text-white font-extrabold text-base sm:text-lg xl:text-xl mt-4">
            Horas de práctica
          </h2>
        </div>
        <div className="p-3 sm:p-10 xl:p-8 rounded-3xl bg-yellow shadow-lg shadow-yellow/50 text-center">
          <p className="text-black font-extrabold text-3xl sm:text-4xl xl:text-5xlv">
            +100
          </p>
          <h2 className="text-white font-extrabold text-base sm:text-lg xl:text-xl mt-4">
            Horas de teoría
          </h2>
        </div>
        <div className="p-3 sm:p-10 xl:p-8 rounded-3xl bg-yellow shadow-lg shadow-yellow/50 text-center">
          <p className="text-black font-extrabold text-3xl sm:text-4xl xl:text-5xl">
            +5
          </p>
          <h2 className="text-white font-extrabold text-base sm:text-lg xl:text-xl mt-4">
            Proyectos completos
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
