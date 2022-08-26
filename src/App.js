import React, { useState } from "react";
import "./assets/css/main.scss";
import projectData from "./projectData.json";
import BackgroundElements from "./components/background/backgroundElements";
import NavBar from "./components/Navbar/navBar";
import Carousel from "./components/carousel/carousel";
import Blocks from "./components/blocks/blocks";
import Shader from "./components/shader/shader";
import PictureModal from "./components/pictures/pictureModal";
import Intro from "./components/intro/intro";

const App = () => {
  const projects = projectData;
  const [colorSet, setColorSet] = useState(1);
  const [shader, setShader] = useState(false);
  const [doodle, setDoodle] = useState(false);
  const [displayedProject, setDisplayedProject] = useState(0);
  const [picOpen1, setPicOpen1] = useState(false);
  const [picOpen2, setPicOpen2] = useState(false);
  const [picOpen3, setPicOpen3] = useState(false);
  const [titleOpen1, setTitleOpen1] = useState(false);
  const [titleOpen2, setTitleOpen2] = useState(false);
  const [titleOpen3, setTitleOpen3] = useState(false);
  const [modalProject, setModalProject] = useState(projects[0]);
  const [intro, setIntro] = useState(true);
  const [carouselUp, setCarouselUp] = useState(true);

  return (
    intro ? <Intro
    setIntro={setIntro}
    setColorSet={setColorSet}
    />
     :
    <div className="App">
      <Shader shader={shader} />
      <NavBar
        colorSet={colorSet}
        setColorSet={setColorSet}
        doodle={doodle}
        setDoodle={setDoodle}

      />
      <Blocks
        projects={projects}
        setShader={setShader}
        shader={shader}
        displayedProject={displayedProject}
        setPicOpen1={setPicOpen1}
        setPicOpen2={setPicOpen2}
        setPicOpen3={setPicOpen3}
        setTitleOpen1={setTitleOpen1}
        setTitleOpen2={setTitleOpen2}
        setTitleOpen3={setTitleOpen3}
        setModalProject={setModalProject}
        carouselUp={carouselUp}
      />
      <Carousel
        projects={projects}
        setShader={setShader}
        shader={shader}
        setDisplayedProject={setDisplayedProject}
        carouselUp={carouselUp}
        setCarouselUp={setCarouselUp}
      />
      <PictureModal
        project={modalProject}
        picOpen1={picOpen1}
        picOpen2={picOpen2}
        picOpen3={picOpen3}
        setPicOpen1={setPicOpen1}
        setPicOpen2={setPicOpen2}
        setPicOpen3={setPicOpen3}
        titleOpen1={titleOpen1}
        titleOpen2={titleOpen2}
        titleOpen3={titleOpen3}
        setTitleOpen1={setTitleOpen1}
        setTitleOpen2={setTitleOpen2}
        setTitleOpen3={setTitleOpen3}
        setShader={setShader}
      />
      <BackgroundElements/>
    </div>
  );
};

export default App;
