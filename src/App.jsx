/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Menu from "./components/menu/Menu";
import Profile from "./components/profile/Profile";
import Home from "./components/content/Home";
import Skills from "./components/content/Skills";
import Projects from "./components/content/Projects";
import Qualities from "./components/content/Qualities";
import Contact from "./components/content/Contact";
import SkeletonMenu from "./components/skeleton/SkeletonMenu"; 
import SkeletonHome from "./components/skeleton/SkeletonHome"; 
import SkeletonProfile from "./components/skeleton/SkeletonProfile"; 

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar la carga
  const [activeSection, setActiveSection] = useState("home"); // Sección activa inicial: 'home'

  const handleItemClick = (item) => {
    setActiveSection(item);
  };

  useEffect(() => {
    // Simula un tiempo de carga (puedes reemplazar esto con una solicitud de datos real)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simula 2 segundos de carga
  }, []);

  return (
    <div className="containerBackground min-h-screen bg-black flex justify-center items-center">
      <div className="container mx-auto flex justify-between flex-wrap">
        <div className="columProfile w-full sm:max-w-sm sm:mx-auto lg:ml-auto lg:mr-auto">
          {isLoading ? (
            <SkeletonProfile onItemClick={handleItemClick} /> // Pasar onItemClick a SkeletonProfile
          ) : (
            // Muestra el contenido real del perfil cuando isLoading es falso
            <Profile onItemClick={handleItemClick} />
          )}
        </div>
        <div className="columnDescription w-full md:max-w-3xl sm:mx-auto lg:ml-auto lg:mr-auto pb-40 sm:pb-40 md:pb-40 lg:pb-40 xl:pb-0 ">
          {activeSection === "home" && (
            <div>
              {isLoading ? (
                <SkeletonHome /> // Muestra el cargador de esqueleto de la página de inicio si isLoading es verdadero
              ) : (
                // Muestra el contenido real de la página de inicio cuando isLoading es falso
                <Home />
              )}
            </div>
          )}
          {activeSection === "skills" && (
            <div>
              <Skills />
            </div>
          )}
          {activeSection === "projects" && (
            <div>
              <Projects />
            </div>
          )}
          {activeSection === "qualities" && (
            <div>
              <Qualities />
            </div>
          )}
          {activeSection === "contact" && (
            <div>
              <Contact />
            </div>
          )}
        </div>
        <div className="columnNavbar grid content-center fixed inset-x-0 bottom-0 xl:relative lg:px-24 xl:px-0">
          {isLoading ? (
            <SkeletonMenu onItemClick={handleItemClick} activeSection={activeSection} /> // Pasar onItemClick a SkeletonMenu
          ) : (
            // Muestra el menú real cuando isLoading es falso
            <Menu onItemClick={handleItemClick} activeSection={activeSection} />
          )}
        </div>
      </div>
      {/*<div className="text-center text-grey text-sm p-4">
    &#169; Anderson Durán
          </div>*/}
    </div>
  );
};

export default App;

