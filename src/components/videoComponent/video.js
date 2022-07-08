import React, { useEffect, useRef } from "react";
import "./video.scss"

export default function App( {project}) {
let MyVideo = require("../../assets/video/" + project.video)

  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="video_container">
        <video
          style={{ width: "101%",  margin: "-.15vw auto"}}
          playsInline
          loop
          muted
          controls
          alt="All the devices"
          src= {MyVideo}

          ref={videoEl}
        />
    </div>
  );
}