import"./pictureModal.scss";

const PictureModal = ({ picOpen, imageDescription, img } ) => {


  return (
    <div className={`pictureModal_Container ${picOpen ? "show" : "hide"}`}>
      <div className="pictureModal_Picture"
      style={{
        backgroundImage:
        "url(" +
        require("../../assets/img/photo/" + img) + ")"}} />
      <div className="pictureModal_PictureDescription font_normal"> {imageDescription}</div>
    </div>
  );
};

export default PictureModal;