import "./blockLeft.scss";
import useWindowSize from "../../../hooks/windowsize";
import VideoComponent from "../../videoComponent/video";
import Video from "../../../assets/icons/video";
import Pictures from "../../pictures/pictures";

const BlockLeft = ({ project, shader, setShader }) => {
  const size = useWindowSize();

  return (
    <div
      className="blockLeft_container"
      style={{
        width: `calc((${size.itemWidth}vw *3) + 1.7vw)`,
        left: `calc((${size.itemWidth} * 0.5vw) - 0.33vw)`,
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
      <Pictures project={project} setShader={setShader} shader={shader} />
    </div>
  );
};

export default BlockLeft;
