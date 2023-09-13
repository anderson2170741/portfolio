/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const SkeletonHome = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simula 2 segundos de carga
  }, []);

  return (
    <div
      className={`SkeletonHome pt-12 sm:pt-16 px-2 sm:px-8 ${
        isLoading ? "" : ""
      }`}
    >
      <h1
        className={`font-bold text-3xl sm:text-4xl xl:text-5xl ${
          isLoading ? "animate-pulse bg-white-rgba text-transparent" : ""
        }`}
      >
        <span className="">¡Hola!</span>, Soy Anderson Durán
      </h1>
      <p
        className={`my-8 sm:my-16 font-bold text-base sm:text-lg xl:text-xl ${
          isLoading ? "animate-pulse bg-white-rgba text-transparent" : ""
        }`}
      >
        Desarrollador web Full Stack con amplio conocimiento en JavaScript,
        HTML, CSS, React, Node.js, SQL, PostgreSQL, Sequelize, Figma, Postman,
        Tailwind, Bootstrap, Git, etc. Dispuesto al cambio y de camino hacia la
        grandeza, por eso sigo ampliando mis conocimientos en Python y
        algoritmos.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
        <div
          className={`p-3 sm:p-10 xl:p-8 rounded-3xl text-center ${
            isLoading ? "animate-pulse bg-white-rgba text-transparent" : ""
          }`}
        ></div>
        <div
          className={`p-3 sm:p-10 xl:p-8 rounded-3xl text-center ${
            isLoading ? "animate-pulse bg-white-rgba text-transparent" : ""
          }`}
        ></div>
        <div
          className={`p-3 sm:p-10 xl:p-8 rounded-3xl text-center ${
            isLoading ? "animate-pulse bg-white-rgba text-transparent" : ""
          }`}
        >
        </div>
      </div>
    </div>
  );
};

export default SkeletonHome;
