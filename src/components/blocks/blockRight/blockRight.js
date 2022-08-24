import "./blockRight.scss";
import useWindowSize from "../../../hooks/windowsize";
import LearnMore from "../../../assets/icons/learnMore";
import GitHubLogo from "../../../assets/icons/GitHubLogo";

const BlockRight = ({ project, carouselUp }) => {
  const size = useWindowSize();

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="blockRight_container"
      style={{
        transitionDuration: ".5s",
        marginTop:
        (window.innerWidth >= 1400) & carouselUp
        ? "0px"
        : (window.innerWidth >= 1400) & !carouselUp
        ? `calc(${size.itemHeight+1}vw + 12px)`
        : "0px",
        width: size.blockWidthBig
          ? `calc( ${size.blockRightWidth}vw - (${size.itemWidth}vw *3))`
          : size.blockWidthMobal
          ? `calc(80vw)`
          : `calc(100vw - (${size.itemWidth}vw + 44px))`,
        height:
          size.blockWidthBig & !carouselUp
            ? `calc(100vh - 170px)`
            : size.blockWidthBig & carouselUp
            ? `calc((100vh - 112px) - (${size.itemHeight + 4}vw) )`
            : `auto`,
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
            className="font_bangers gitHubLink"
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
