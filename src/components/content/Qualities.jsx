/* eslint-disable no-unused-vars */
import React from "react";
import QualitiesCarousel from "./carousel/QualitiesCarousel" ;

const Qualities = () => {
  return (
    <div className="pt-12 sm:pt-16 px-2 sm:px-8">
      <h1 className="mb-8 sm:mb-16 font-bold text-3xl sm:text-4xl xl:text-5xl text-center mx-auto xl:text-left text-yellow">Cualidades</h1>
      <QualitiesCarousel />
    </div>
  );
};

export default Qualities;
