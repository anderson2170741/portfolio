/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Menu from "./components/menu/Menu";
import Profile from "./components/profile/Profile";
import Skills from "./components/content/Skills";
import Projects from "./components/content/Projects";
import Qualities from "./components/content/Qualities";
import Contact from "./components/content/Contact";
import SkeletonMenu from "./components/skeleton/SkeletonMenu";
import SkeletonHome from "./components/skeleton/SkeletonHome";
import SkeletonProfile from "./components/skeleton/SkeletonProfile";
import Home from "./components/content/Home";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  const handleItemClick = (item) => {
    setActiveSection(item);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="containerBackground min-h-screen bg-veryDark flex justify-center items-center">
      <div className="container mx-auto flex justify-between flex-wrap">
        <div className="columProfile w-full sm:max-w-sm sm:mx-auto lg:ml-auto lg:mr-auto">
          {isLoading ? (
            <SkeletonProfile onItemClick={handleItemClick} />
          ) : (
            <Profile onItemClick={handleItemClick} />
          )}
        </div>
        <div className="columnDescription w-full md:max-w-3xl sm:mx-auto lg:ml-auto lg:mr-auto pb-40 sm:pb-40 md:pb-40 lg:pb-40 xl:pb-0">
          {activeSection === "home" && (
            <div>
              {isLoading ? (
                <SkeletonHome />
              ) : (
                <Home onItemClick={handleItemClick} /> 
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
        <div className="columnNavbar grid content-center fixed inset-x-0 bottom-5 xl:relative lg:px-24 xl:px-0">
          {isLoading ? (
            <SkeletonMenu onItemClick={handleItemClick} activeSection={activeSection} />
          ) : (
            <Menu onItemClick={handleItemClick} activeSection={activeSection} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;


