/* eslint-disable no-unused-vars */
import React from "react";
import ProjectCarousel from "./carousel/ProjectCarousel" ;

const Projects = () => {
  return (
    <div className="pt-12 sm:pt-16 px-2 sm:px-8">
      <h1 className="mb-8 sm:mb-16 font-bold text-3xl sm:text-4xl xl:text-5xl text-center mx-auto xl:text-left text-orange">Proyectos</h1>
      <ProjectCarousel/>
    </div>
  );
};

export default Projects;
