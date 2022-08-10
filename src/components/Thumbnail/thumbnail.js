import React, { useState, useEffect } from "react";
import "./thumbnail.scss";
import useWindowSize from "../../hooks/windowsize";
import MiniModal from "../miniModal/miniModal";

const Thumbnail = ({
  project,
  index,
  leftIndex,
  rightIndex,
  startTrigger,
  setShader,
  setDisplayedProject
}) => {
  const size = useWindowSize();
  const [modalState, setModalState] = useState(false);
  const [hovered, setHovered] = useState(false);
  const projectUsed = project;
  const carouselText = projectUsed.code;
  const projectTitle = projectUsed.title;
  const projectDescription = projectUsed.description;
  const thumbImage = projectUsed.image;
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  useEffect(() => {
    const hovermodal = async () => {
      await sleep(500);
      hovered ? setModalState(true) : setModalState(false)
    };
    hovermodal();
  }, [hovered]);

  return (
    <div
      className="Thumbnail"
      onMouseLeave={() => {
        setHovered(false)
      }}
      onMouseEnter={() => {
        setHovered(true)
      }}
    >
<div className="miniModal">
      <MiniModal
      thumbImage={thumbImage}
      modalState={modalState}
      hovered={hovered}
      size={size}
      carouselText={carouselText}
      projectTitle={projectTitle}
      projectDescription = {projectDescription}
      index={index}
      leftIndex={leftIndex}
      rightIndex={rightIndex}
      startTrigger={startTrigger}
      setDisplayedProject={setDisplayedProject}
      className="thumb_minimodal"
      />
      </div>

      <div
        className="wrapper"
        style={{
          backgroundImage: "url(" + require("../../assets/img/photo/" + thumbImage) + ")",
          width: size.itemWidth + "vw",
          height: size.itemHeight + "vw",
        }}
      >
        <span className="shiftText">{carouselText}</span>
      </div>
    </div>
  );
};

export default Thumbnail;
