import { useState } from "react";
import "./pictures.scss";
import useWindowSize from "../../hooks/windowsize";
import HandDrawnRight from "../../assets/icons/handDrawnRight";
import PictureModal from "./pictureModal";
import Camera from "../../assets/icons/camera";

const Pictures = ({ project, setShader, shader }) => {
  const size = useWindowSize();
  const [picOpen1, setPicOpen1] = useState(false);
  const [picOpen2, setPicOpen2] = useState(false);
  const [picOpen3, setPicOpen3] = useState(false);



  return (
      <div className="pictures_img_Container">
        <div className="pictures_doodle">
          <div className="pictures_subText font_marker">
            <div className="camera"><Camera/></div>
            <p>pictures or it didn't happen!</p>
            <p>(click to see m' bigger)</p>
          </div>
          <div className="pictures_handDrawnRigth">
            <HandDrawnRight />
          </div>
        </div>


        <div
          className="pictures_img"
          style={{
            backgroundImage:
              "url(" +
              require("../../assets/img/photo/" + project.image1) +
              ")",
            width: `${size.pictureWidth}vw`,
            height: `${size.pictureWidth * .55}vw`
          }}
          onClick={() => {setPicOpen1(!picOpen1); setShader(!shader)}}>
          <PictureModal
            picOpen={picOpen1}
            img={project.image1}
            imageDescription={project.image1_descr}
            />
        </div>


        <div
          className="pictures_img"
          style={{
            backgroundImage:
              "url(" +
              require("../../assets/img/photo/" + project.image2) +
              ")",
              width: `${size.pictureWidth}vw`,
              height: `${size.pictureWidth * .55}vw`
          }}
          onClick={() => {setPicOpen2(!picOpen2);  setShader(!shader)}}>
          <PictureModal
            picOpen={picOpen2}
            img={project.image2}
            imageDescription={project.image2_descr}
            />
        </div>


        <div
          className="pictures_img"
          style={{
            backgroundImage:
              "url(" +
              require("../../assets/img/photo/" + project.image3) +
              ")",
              width: `${size.pictureWidth}vw`,
              height: `${size.pictureWidth * .55}vw`
          }}
          onClick={() => {setPicOpen3(!picOpen3);  setShader(!shader)}}>
          <PictureModal
            picOpen={picOpen3}
            img={project.image3}
            imageDescription={project.image3_descr}
            />
        </div>





      </div>
  );
};

export default Pictures;
