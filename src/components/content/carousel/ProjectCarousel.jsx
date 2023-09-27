/* eslint-disable no-unused-vars */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaGithub } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import pokedex from "../../../assets/image/carouselImages/pokedex.png";
import PhraseCard from "../../../assets/image/carouselImages/phrase-card.png";
import PokemonRandom from "../../../assets/image/carouselImages/pokemon-random.png";
import WeatherApp from "../../../assets/image/carouselImages/weather.png";

const ProjectCarousel = () => {
  return (
    <div className="w-full">
      <Carousel infiniteLoop showThumbs={false} showIndicators={false}>
        {/* Pokédex */}
        <div className="">
          <h2 className="pb-4 font-bold text-xl sm:text-2xl xl:text-3xl text-yellow text-center">
            Pokédex
          </h2>
          <div className="flex flex-col md:flex-row sm:mx-14 sm:my-8 md:mx-8 md:my-8">
            <a
              href="https://anderson-duran-pokedex.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-60 h-60 sm:w-80 sm:h-80  hover:skew-y-12  mx-auto md:mx-0 ">
                <img className="rounded-2xl" src={pokedex} alt="pokedex" />
              </div>
            </a>

            <div className="md:ml-8 text-left text-white font-bold">
              <p className="mb-4 text-base sm:text-lg xl:text-xl">
                Una App Web que proporciona información detallada sobre los
                Pokémon tales como como sus características, tipos y más.
              </p>
              <p className="mb-4 text-sm sm:text-base xl:text-lg">
                <span className="text-base sm:text-lg xl:text-xl text-yellow">
                  Tecnologías -{" "}
                </span>
                React, Tailwind CSS, API
              </p>
              <p className="mb-4 text-sm sm:text-base xl:text-lg">
                <span className="text-base sm:text-lg xl:text-xl text-yellow">
                  Role -{" "}
                </span>
                Frontend
              </p>
              <div className="flex">
                {" "}
                <a
                  href="https://github.com/anderson2170741/pokedex.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="boxIcons mr-8 grid place-items-center w-7 h-7 sm:w-8 sm:h-8 xl:w-10 xl:h-10 cursor-pointer bg-grey rounded-lg"
                >
                  <FaGithub className="text-xl sm:text-2xl xl:text-3xl text-black" />
                </a>
                <a
                  href="https://www.figma.com/file/6p1Py3dUDs9dRDgSX3iZGE/React?type=design&node-id=0%3A1&mode=design&t=OSxsyauuXLwVZGYV-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="boxIcons grid place-items-center w-7 h-7 sm:w-8 sm:h-8 xl:w-10 xl:h-10 cursor-pointer bg-grey rounded-lg"
                >
                  <FiFigma className="text-xl sm:text-2xl xl:text-3xl text-black" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Phrase Card */}
        <div className="">
          <h2 className="pb-4 font-bold text-xl sm:text-2xl xl:text-3xl text-yellow text-center">
            Phrase Card
          </h2>
          <div className="flex flex-col md:flex-row sm:mx-14 sm:my-8 md:mx-8 md:my-8">
            <a
              href="https://phrase-card.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-60 h-60 sm:w-80 sm:h-80  hover:skew-y-12  mx-auto md:mx-0 ">
                <img
                  className="rounded-2xl"
                  src={PhraseCard}
                  alt="phrase-card"
                />
              </div>
            </a>

            <div className="md:ml-8 text-left text-white font-bold">
              <p className="mb-4 text-base sm:text-lg xl:text-xl">
                App que cambia de frases de manera aleatoria con tan solo hacer
                clic en el botón.
              </p>
              <p className="mb-4 text-sm sm:text-base xl:text-lg">
                <span className="text-base sm:text-lg xl:text-xl text-yellow">
                  Tecnologías -{" "}
                </span>
                React, CSS, API
              </p>
              <p className="mb-4 text-sm sm:text-base xl:text-lg">
                <span className="text-base sm:text-lg xl:text-xl text-yellow">
                  Role -{" "}
                </span>
                Frontend
              </p>
              <a
                href="https://github.com/anderson2170741/phrase-card.git"
                target="_blank"
                rel="noopener noreferrer"
                className="boxIcons grid place-items-center w-7 h-7 sm:w-8 sm:h-8 xl:w-10 xl:h-10 cursor-pointer bg-grey rounded-lg"
              >
                <FaGithub className="text-xl sm:text-2xl xl:text-3xl text-black" />
              </a>
            </div>
          </div>
        </div>
        {/* Pokémon Changer */}
        <div className="">
          <h2 className="pb-4 font-bold text-xl sm:text-2xl xl:text-3xl text-yellow text-center">
            Pokémon Changer
          </h2>
          <div className="flex flex-col md:flex-row sm:mx-14 sm:my-8 md:mx-8 md:my-8">
            <a
              href="https://random-pokemon-anderson-duran.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-60 h-60 sm:w-80 sm:h-80  hover:skew-y-12  mx-auto md:mx-0">
                <img
                  className="rounded-2xl"
                  src={PokemonRandom}
                  alt="pokemon"
                />
              </div>
            </a>

            <div className="md:ml-8 text-left text-white font-bold">
              <p className="mb-4 text-base sm:text-lg xl:text-xl">
                App que muestra algunas características de un Pokémon de manera
                aleatoria con tan solo dar click en cambiar Pokémon y otras
                funciones.
              </p>
              <p className="mb-4 text-sm sm:text-base xl:text-lg">
                <span className="text-base sm:text-lg xl:text-xl text-yellow">
                  Tecnologías -{" "}
                </span>
                React, CSS, API
              </p>
              <p className="mb-4 text-sm sm:text-base xl:text-lg">
                <span className="text-base sm:text-lg xl:text-xl text-yellow">
                  Role -{" "}
                </span>
                Frontend
              </p>
              <a
                href="https://github.com/anderson2170741/random-pokemon.git"
                target="_blank"
                rel="noopener noreferrer"
                className="boxIcons grid place-items-center w-7 h-7 sm:w-8 sm:h-8 xl:w-10 xl:h-10 cursor-pointer bg-grey rounded-lg"
              >
                <FaGithub className="text-xl sm:text-2xl xl:text-3xl text-black" />
              </a>
            </div>
          </div>
        </div>
        {/* WeatherApp */}
        <div className="">
          <h2 className="pb-4 font-bold text-xl sm:text-2xl xl:text-3xl text-yellow text-center">
            WeatherApp
          </h2>
          <div className="flex flex-col md:flex-row sm:mx-14 sm:my-8 md:mx-8 md:my-8">
            <a
              href="https://weather-anderson-duran.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-60 h-60 sm:w-80 sm:h-80  hover:skew-y-12  mx-auto md:mx-0">
                <img
                  className="rounded-2xl"
                  src={WeatherApp}
                  alt="weather-app"
                />
              </div>
            </a>

            <div className="md:ml-8 text-left text-white font-bold">
              <p className="mb-4 text-base sm:text-lg xl:text-xl">
                Aplicación web para obtener información meteorológica precisa y
                actualizada en una ubicación en tiempo real.
              </p>
              <p className="mb-4 text-sm sm:text-base xl:text-lg">
                <span className="text-base sm:text-lg xl:text-xl text-yellow">
                  Tecnologías -{" "}
                </span>
                React, CSS, API
              </p>
              <p className="mb-4 text-sm sm:text-base xl:text-lg">
                <span className="text-base sm:text-lg xl:text-xl text-yellow">
                  Role -{" "}
                </span>
                Frontend
              </p>
              <a
                href="https://github.com/anderson2170741/weather.git"
                target="_blank"
                rel="noopener noreferrer"
                className="boxIcons grid place-items-center w-7 h-7 sm:w-8 sm:h-8 xl:w-10 xl:h-10 cursor-pointer bg-grey rounded-lg"
              >
                <FaGithub className="text-xl sm:text-2xl xl:text-3xl text-black" />
              </a>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
