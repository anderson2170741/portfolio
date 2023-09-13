/* eslint-disable no-unused-vars */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const QualitiesCarousel = () => {
  return (
    <div className="w-full">
      <Carousel infiniteLoop showThumbs={false} showIndicators={false}>
        {/*Experiencia Laboral*/}
        <div className="">
          <h2 className="pb-4 font-bold text-xl sm:text-2xl xl:text-3xl text-yellow text-center">
            Experiencia Laboral
          </h2>
          <div className="mb-4 px-12 text-left">
            <h3 className="text-lg sm:text-xl xl:text-2xl font-bold text-white ">Five Star</h3>
            <h4 className=" text-base sm:text-lg xl:text-xl text-yellow">Desarrollador de calzados</h4>
            <p className="text-grey">2019-2023</p>
            <ul className="list-disc list-inside">
              <li className="text-base sm:text-lg xl:text-xl text-white">
                Participe en el desarrollo y manofactura de una gran diversidad
                de estilos de calzados en conjunto con los diseñadores gráficos
                y el departamento de ingeniería.
              </li>
            </ul>
          </div>
          <div className="mb-4 px-12 text-left">
            <h3 className="text-lg sm:text-xl xl:text-2xl font-bold text-white ">Minimarket Luis</h3>
            <h4 className="text-base sm:text-lg xl:text-xl text-yellow">Vendedor</h4>
            <p className="text-grey">2017-2017</p>
            <ul className="list-disc list-inside">
              <li className="text-base sm:text-lg xl:text-xl text-white">
                Vendedor de productos de primera instancia.
              </li>
              <li className="text-base sm:text-lg xl:text-xl text-white">
                Trato continuo con los clientes.
              </li>
            </ul>
          </div>
        </div>
        {/*Educación*/}
        <div className="">
          <h2 className="pb-4 font-bold text-xl sm:text-2xl xl:text-3xl text-yellow text-center">
            Educación
          </h2>
          <div className="mb-4 px-12 text-left">
            <h3 className="text-lg sm:text-xl xl:text-2xl font-bold text-white ">Academlo</h3>
            <ul className="list-disc list-inside">
              <li className="mt-2 text-xl sm:text-lg xl:text-xl text-yellow">Front-End Development with React
              </li>
              <a
                href="https://bit.ly/465aio0"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-9 text-xs xl:text-sm grow text-link"
              >
                https://bit.ly/465aio0
              </a>
            </ul>
            <ul className="list-disc list-inside">
              <li className="mt-2 text-xl sm:text-lg xl:text-xl text-yellow">Back-End Development with Node.js
              </li>
              <a
                href="https://bit.ly/3sPthET"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-9 text-xs xl:text-sm text-link"
              >
                https://bit.ly/3sPthET
              </a>
            </ul>
            <ul className="list-disc list-inside">
              <li className="mt-2 text-xl sm:text-lg xl:text-xl text-yellow">Foundations in HTML, CSS, and Javascript
              </li>
              <a
                href="https://bit.ly/3Pc90Rn"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-9 text-xs xl:text-sm text-link"
              >
                https://bit.ly/3Pc90Rn
              </a>
            </ul>
          </div>
          <div className="mb-4 px-12 text-left">
            <h3 className="text-lg sm:text-xl xl:text-2xl font-bold text-white ">Infotep </h3>
            <ul className="list-disc list-inside">
              <li className="mt-2 text-xl sm:text-lg xl:text-xl text-yellow">Excel Intermedio
              </li>
              <a
                href="https://bit.ly/48jIVbV"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-9 text-xs xl:text-sm text-link"
              >
                https://bit.ly/48jIVbV
              </a>
            </ul>
            <ul className="list-disc list-inside">
              <li className="my-2 text-xl sm:text-lg xl:text-xl text-yellow">Mejora de Procesos Productivos
              </li>
              <a
                href="http://bit.ly/45FGVJ9"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-9 text-xs xl:text-sm text-link"
              >
                http://bit.ly/45FGVJ9
              </a>
            </ul>
          </div>
        </div>
        {/*Idiomas*/}
        <div className="">
          <h2 className="pb-4 font-bold text-xl sm:text-2xl xl:text-3xl text-yellow text-center">
            Idiomas
          </h2>
          <div className="mb-4 px-12 text-left">
            <h3 className="text-lg sm:text-xl xl:text-2xl font-bold text-white ">Español:</h3>
            <h4 className="ml-24 text-base sm:text-lg xl:text-xl text-yellow">Nativo</h4>
          </div>
          <div className="mb-4 px-12 text-left">
            <h3 className="md:text-xl xl:text-2xl font-bold text-white ">Inglés:</h3>
            <h4 className="ml-24 text-base sm:text-lg xl:text-xl text-yellow">A1</h4>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default QualitiesCarousel;
