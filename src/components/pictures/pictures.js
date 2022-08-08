import "./pictures.scss";
import useWindowSize from "../../hooks/windowsize";
import HandDrawnRight from "../../assets/icons/handDrawnRight";
import Camera from "../../assets/icons/camera";

const Pictures = ({
  project,
  setShader,
  setPicOpen1,
  setPicOpen2,
  setPicOpen3,
  setTitleOpen1,
  setTitleOpen2,
  setTitleOpen3,
  setModalProject
 }) => {

  // setModalProject(project)

  const size = useWindowSize();

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
            backgroundImage: "url("+require("../../assets/img/photo/"+project.image1)+")",
            width: `${size.pictureWidth}vw`,
            height: `${size.pictureWidth * .55}vw`
          }}
          onClick={() => {setPicOpen1(true); setShader(true); setTitleOpen1(true); setModalProject(project)}}>
        </div>

        <div
          className="pictures_img"
          style={{
            backgroundImage: "url("+require("../../assets/img/photo/"+project.image2)+")",
            width: `${size.pictureWidth}vw`,
            height: `${size.pictureWidth * .55}vw`
          }}
          onClick={() => {setPicOpen2(true); setShader(true); setTitleOpen2(true); setModalProject(project)}}>
        </div>

        <div
          className="pictures_img"
          style={{
            backgroundImage: "url("+require("../../assets/img/photo/"+project.image3)+")",
            width: `${size.pictureWidth}vw`,
            height: `${size.pictureWidth * .55}vw`
          }}
          onClick={() => {setPicOpen3(true); setShader(true); setTitleOpen3(true); setModalProject(project)}}>
        </div>

      </div>
  );
};

export default Pictures;
