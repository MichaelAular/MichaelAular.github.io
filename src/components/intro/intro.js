import "./intro.scss";
import Loader from "../loader/loader";

const Intro = ({ setIntro }) => {
  const introVideo = require("../../assets/video/BioMe.mp4");
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const  timerIntro = async () => {
    await sleep(22500);
    setIntro(false);
  };

  timerIntro()

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

      <div className="introButtonContainer">
        <button className="loaderbutton" onClick={() => setIntro(false)}>
          <Loader className="loader" />
          <div className="skipText font_pressStart">click to skip</div>
        </button>
      </div>
    </div>
  );
};

export default Intro;
