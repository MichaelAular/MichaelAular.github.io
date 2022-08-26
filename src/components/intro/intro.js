import "./intro.scss";

const Intro = ({ setIntro, setColorSet }) => {
    const introVideo = require("../../assets/video/BioMe.mp4");

  return (
    <div className="introContainer">
      <div className="introVideoWrapper">
        <video
        muted
        style={{
          minWidth: "100vw",
        }}
        playsInline
        alt="All the devices"
        src={introVideo}
        autoPlay
        />
        </div>

      <div className="introStartButtonContainer">
        <button className="introStartButton" onClick={() => setIntro(false)}>
          <span className="introButtonText">GO!</span>
        </button>
        <div className="introTitle">
          <b>Portfolio</b>
          <br />
          <span className="name">Michael Aular</span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
