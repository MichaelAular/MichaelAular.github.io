import "./blockRight.scss";
import useWindowSize from "../../../hooks/windowsize";
import LearnMore from "../../../assets/icons/learnMore";

const BlockRight = ({ project }) => {
  const size = useWindowSize();

  return (
    <div
      className="blockRight_container"
      style={{
        height: `calc(82vh - ${size.itemHeight + 1.2}vw)`,
        width: `calc(${size.itemWidth}vw * 3 + 1vw)`,
        // backgroundImage: "url(" + require("../../../assets/img/photo/profile.jfif") + ")",
        }}
    >
      <div className="blockRight_projectTitle font_bangers">
        <div className="blockRight_subTitle font_marker">Projectname:</div>
        {project.title}
      </div>
      <div className="blockRight_projectInfo font_normal">
        <b>Build for:</b> {project.buildFor}
        <br />
        <b>Release date:</b> {project.date_released}
        <br />
        <b>Tools:</b> {project.tools}
        <br />
      </div>

      <div className="blockRight_projectTitle font_bangers">
      <div className="blockRight_subTitle font_marker">About:</div>The Project</div>
      <div className="blockRight_doodle"> <LearnMore /> </div>
      <div className="blockRight_projectInfo font_normal">{project.description}</div>

    </div>
  );
};

export default BlockRight;
