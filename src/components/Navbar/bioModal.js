import "./aboutMe.scss";
import bio from "./bio.json";
import useWindowSize from "../../hooks/windowsize";

const BioModal = ({ aboutMeOpen, setAboutMeOpen }) => {
  const size = useWindowSize();

  if (!aboutMeOpen) {
    return null;
  }

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
      <div className="bioBlock_title font_bangers">About me</div>
      <div className="bioBlock_text font_normal">{bio.bio}</div>
      <div className="bioPic"/>
    </div>
  );
};

export default BioModal;
