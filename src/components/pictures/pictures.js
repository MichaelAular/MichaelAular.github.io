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
  const [titleOpen1, setTitleOpen1] = useState(false);
  const [titleOpen2, setTitleOpen2] = useState(false);
  const [titleOpen3, setTitleOpen3] = useState(false);

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
          onClick={() => {setPicOpen1(!picOpen1); setShader(!shader); setTitleOpen1(!titleOpen1)}}>
          <div className="PictureModal"
          style={{ left: `-${size.pictureModalPosition}vw`}}>
            <PictureModal
            picOpen={picOpen1}
            img={project.image1}
            imageDescription={project.image1_descr}
            titleOpen={titleOpen1}
            />
            </div>
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
          onClick={() => {setPicOpen2(!picOpen2); setShader(!shader); setTitleOpen2(!titleOpen2)}}>
        <div className="PictureModal"
          style={{ left: `-${size.pictureModalPosition}vw`}}>
            <PictureModal
            picOpen={picOpen2}
            img={project.image2}
            imageDescription={project.image2_descr}
            titleOpen={titleOpen2}
            />
            </div>
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
          onClick={() => {setPicOpen3(!picOpen3);  setShader(!shader); setTitleOpen3(!titleOpen3)}}>
          <div className="PictureModal"
          style={{ left: `-${size.pictureModalPosition}vw`}}>
            <PictureModal
            picOpen={picOpen3}
            img={project.image3}
            imageDescription={project.image3_descr}
            titleOpen={titleOpen3}
            />
            </div>
        </div>


      </div>
  );
};

export default Pictures;
