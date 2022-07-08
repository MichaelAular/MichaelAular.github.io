import React, { useEffect, useState } from "react";
import "./thumbnail.scss";
import useWindowSize from "../../hooks/windowsize";
import MiniModal from "../miniModal/miniModal";

const Thumbnail = ( {project, updateZIndexRef} ) => {
  const [hovered] = useState(false);
  const size = useWindowSize();
  const projectUsed= project;
  const carouselText = projectUsed.code;
  const thumbImage = projectUsed.image;

  useEffect( () => {
    if (hovered) { updateZIndexRef(999) }
    if (!hovered) { updateZIndexRef(0) }
  }, [hovered]);

  return (
    <div className="wrapper"
    style={{
      backgroundImage: 'url(' + require('../../assets/img/photo/'+thumbImage) +')',
      width: size.itemWidth+"vw",
      height: size.itemHeight+"vw",
    }}
    >
      <MiniModal/>
      <span className="shiftText">
        {carouselText}
      </span>
    </div>
  );
}

export default Thumbnail;
