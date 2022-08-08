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
  setModalProject
  }) => {

  const size = useWindowSize();

  return (
    <div
      className="blockLeft_container"
      style={{
        width: `calc((${size.itemWidth}vw *3) + 2vw)`,
        height: `calc(98vh - (${size.itemHeight}vw) - 180px)`,
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
  );
};

export default BlockLeft;
