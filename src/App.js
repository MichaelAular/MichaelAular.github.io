import React, { useState } from "react";
import "./assets/css/main.scss";
import projectData from "./projectData.json"
import NavBar from "./components/Navbar/navBar";
import Carousel from "./components/carousel/carousel"
import Blocks from "./components/blocks/blocks";
import Shader from "./components/shader/shader";
import useWindowSize from "./hooks/windowsize";

function App() {
  const projects = projectData;
  const size=useWindowSize()
  const [colorSet, setColorSet] = useState(1);
  const [shader , setShader] = useState(false);
  const [doodle, setDoodle] = useState(false);
  const [startup, setStartup] = useState(true);
  const [displayedProject, setDisplayedProject] = useState(0)

  return (
    <div className="App"
    style={{ paddingBottom:`${size.itemHeight}vw`
    }}
    >
      <Shader
      shader={shader}
      />
      <NavBar
      colorSet={colorSet}
      setColorSet={setColorSet}
      doodle={doodle}
      setDoodle={setDoodle}
      startup={startup}
      setStartup={setStartup}
      />
      <Blocks
      projects={projects}
      setShader={setShader}
      shader={shader}
      displayedProject={displayedProject}
      />
      <Carousel
      projects={projects}
      setShader={setShader}
      shader={shader}
      setDisplayedProject={setDisplayedProject}
      />
    </div>
  );
}

export default App;