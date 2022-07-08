import"./aboutMe.scss";
import bio from "./bio.json";
import useWindowSize from "../../hooks/windowsize";

const BioModal = ({ aboutMeOpen }) => {
     const size = useWindowSize();
  if (!aboutMeOpen) {
    return null;
  }

  return (
    <div
      className="bioBlock_container font_normal"
      style={{
        width: `calc(${size.itemWidth}vw - 3vw)`,
      }}
    >
      <div className="bioBlock_title font_bangers">About me</div>
      <div className="bioBlock_text font_normal">{bio.bio}</div>
    </div>
  );
};

export default BioModal;