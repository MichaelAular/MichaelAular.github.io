import "./blockLeft.scss";
import useWindowSize from "../../../hooks/windowsize";
import VideoComponent from "../../videoComponent/video";
import Video from "../../../assets/icons/video";
import Pictures from "../../pictures/pictures";

const BlockLeft = ({
  project,
  shader,
  setShader,
  setPicOpen1,
  setPicOpen2,
  setPicOpen3,
  setTitleOpen1,
  setTitleOpen2,
  setTitleOpen3,
  setModalProject,
  carouselUp
}) => {
  const size = useWindowSize();

  return (
    <div
      className="blockLeft_container"
      style={{
        transitionDuration: '.5s',
        marginTop: carouselUp ? '0px' : `calc((${size.itemHeight / 2 }vw) + 1vh + 90px )`,
        width: size.blockWidthBig
          ? `calc((${size.itemWidth + .3}vw *3))`
          : size.blockWidthMobal ? `calc(80vw)`
          : `calc(100vw - (${size.itemWidth}vw + 44px))`,
        height:
        size.blockWidthBig & !carouselUp ? `calc(100vh - 170px)` :
        size.blockWidthBig  & carouselUp ? `calc(98vh - (${size.itemHeight}vw) - 180px)` :
        `auto`
      }}
    >
      <div className="blockLeft_video">
        <div className="Bigblock_doodle">
          <p className="doodle_light font_marker">Ligth...</p>
          <p className="doodle_camera font_marker">Camera...</p>
          <p className="doodle_action font_marker">Action!</p>
          <div className="videoIcon">
            <Video />
          </div>
        </div>

        <VideoComponent project={project} />
      </div>

      <div className="blockLeft_pictures">
        <Pictures
        project={project}
        setShader={setShader}
        shader={shader}
        setPicOpen1={setPicOpen1}
        setPicOpen2={setPicOpen2}
        setPicOpen3={setPicOpen3}
        setTitleOpen1={setTitleOpen1}
        setTitleOpen2={setTitleOpen2}
        setTitleOpen3={setTitleOpen3}
        setModalProject={setModalProject}
      />
      </div>
    </div>
  );
};

export default BlockLeft;
