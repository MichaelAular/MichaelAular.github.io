import "./blockRight.scss";
import useWindowSize from "../../../hooks/windowsize";
import LearnMore from "../../../assets/icons/learnMore";
import GitHubLogo from "../../../assets/icons/GitHubLogo";

const BlockRight = ({ project }) => {
  const size = useWindowSize();

  return (
    <div
      className="blockRight_container"
      style={{
        width: `calc( ${size.blockRightWidth}vw - (${size.itemWidth}vw *3) )`,
        height: `calc(90vh - ${size.itemHeight * 2}vh - 100px)`,
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
      <div className="githubLinkContainer font_normal"><GitHubLogo/>{project.git}</div>

    </div>
  );
};

export default BlockRight;
