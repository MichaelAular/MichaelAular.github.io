import"./pictureModal.scss";
import useWindowSize from "../../hooks/windowsize";

const PictureModal = ({ picOpen, imageDescription, img, titleOpen} ) => {
  const size=useWindowSize()

  return (
  <>
    <div className={`pictureModal_Container ${picOpen ? "show" : "hide"}`}>
      <div className="pictureModal_Picture"
      style={{
        backgroundImage:
        "url(" +
        require("../../assets/img/photo/" + img) + ")"
        }} />
    </div>
    <div className="pictureModal_PictureDescription font_normal"
    style ={{
    opacity: `${titleOpen ? "1" : "0"}`
    }}
    > {imageDescription} </div>
    </>
  );
};

export default PictureModal;