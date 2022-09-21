import "./aboutMe.scss";
import bio from "./bio.json";
import useWindowSize from "../../hooks/windowsize";

const BioModal = ({ aboutMeOpen, setAboutMeOpen }) => {
  const size = useWindowSize();

  if (!aboutMeOpen) {
    return null;
  }

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="bioBlock_container font_normal"
      onClick={() => {
        setAboutMeOpen(false);
      }}
      style={{
        maxHeight: `calc(92vh - (${size.itemHeight}vw + 180px))`,
      }}
    >
      <div className="bioPic" />

      <div className="bioText">
      <span className="bioBlock_title font_bangers">
        About me
        <button className="font_marker BioModalCloseButton">X</button>
        </span>
      <br/>

        <span className="bioBlock_text font_normal">
          {bio.bio}
        </span>

        <br/>

        <span
          className="font_bangers linkedIn"
          onClick={() => openInNewTab("https://www.linkedin.com/in/michael-aular/")}
        >
          Lets connect on linkedIn
        </span>
        
      </div>

    </div>
  );
};

export default BioModal;
