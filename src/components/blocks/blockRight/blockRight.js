import "./blockRight.scss";
import useWindowSize from "../../../hooks/windowsize";
import LearnMore from "../../../assets/icons/learnMore";
import GitHubLogo from "../../../assets/icons/GitHubLogo";

const BlockRight = ({ project }) => {
  const size = useWindowSize();

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="blockRight_container"
      style={{
        width: size.blockWidthBig
          ? `calc( ${size.blockRightWidth}vw - (${size.itemWidth}vw *3))`
          : `calc(100vw - (${size.itemWidth}vw + 44px))`,
          height: size.blockWidthBig ? `calc(98vh - (${size.itemHeight}vw) - 180px)`
          : `auto`
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
        <div className="githubLinkContainer font_normal">
          <div className="githubLogo">
            <GitHubLogo />
          </div>
          <div
            className="gitHubLink font_bangers"
            onClick={() => openInNewTab("https://" + project.git)}
          >
            github
          </div>
        </div>
      </div>

      <div className="blockRight_projectTitle font_bangers">
        <div className="blockRight_subTitle font_marker">About:</div>
        The Project
        <div className="blockRight_doodle">
          <LearnMore />
        </div>
      </div>
      <div className="blockRight_projectInfo font_normal">
        {project.description}
      </div>
    </div>
  );
};

export default BlockRight;
