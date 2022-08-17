import"./aboutMe.scss";
import bio from "./bio.json";


const BioModal = ({
  aboutMeOpen,
  setAboutMeOpen
  }) => {
  if (!aboutMeOpen) {
    return null;
  }

  return (
    <div
      className="bioBlock_container font_normal"
      onClick={() => { setAboutMeOpen(false) }}>
      <div className="bioBlock_title font_bangers">About me</div>
      <div className="bioBlock_text font_normal">{bio.bio}</div>
    </div>
  );
};

export default BioModal;