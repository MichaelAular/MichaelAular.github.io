import React, { useState } from "react";
import "./aboutMe.scss";
import Beard from "../../assets/icons/beardIcon";
import CurvedArrowDown from "../../assets/icons/curverdArrowDown";
import BioModal from "./bioModal";

const AboutMe = () => {
  const [aboutMeOpen, setAboutMeOpen] = useState(false);

  return (
    <div
      className="aboutMe_Container"
    >
      <div className="aboutMe_Button font_bangers"
      onMouseLeave={() => { setAboutMeOpen(false) }}
      onMouseEnter={() => { setAboutMeOpen(true) }}
      >michael aular</div>
      <div className="BeardIconContainer">
        <div className="beard">
          <Beard />
        </div>
        <div className="CurvedArrownDown">
          <CurvedArrowDown />
        </div>
        <div className="bio_doodle font_marker">this is me! read more...</div>
      </div>
     <BioModal aboutMeOpen={aboutMeOpen}/>
    </div>
  );
};

export default AboutMe;
