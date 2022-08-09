import"./pictureModal.scss";

const PictureModal = ({
  project,
  picOpen1,
  picOpen2,
  picOpen3,
  setPicOpen1,
  setPicOpen2,
  setPicOpen3,
  titleOpen1,
  titleOpen2,
  titleOpen3,
  setTitleOpen1,
  setTitleOpen2,
  setTitleOpen3,
  setShader
  } ) => {

  return (
  <div>

    <div className={`pictureModal_Container ${picOpen1 ? "show" : "hide"}`}>
      <div className="pictureModal_Picture"
        style={{
        backgroundImage: "url("+require("../../assets/img/photo/"+project.image1)+")" }}
        onClick={() => {
          setPicOpen1(false);
          setShader(false);
          setTitleOpen1(false);
        }}/>
    </div>

    <div className="pictureModal_PictureDescription font_normal"
        style ={{opacity: `${titleOpen1 ? "1" : "0"}`}}>
        {project.image1_descr}
    </div>

    <div className={`pictureModal_Container ${picOpen2 ? "show" : "hide"}`}>
      <div className="pictureModal_Picture"
        style={{
        backgroundImage: "url("+require("../../assets/img/photo/"+project.image2)+")" }}
        onClick={() => {
          setPicOpen2(false);
          setShader(false);
          setTitleOpen2(false);
        }}/>
    </div>

    <div className="pictureModal_PictureDescription font_normal"
      style ={{opacity: `${titleOpen2 ? "1" : "0"}`}}>
      {project.image2_descr}
    </div>

    <div className={`pictureModal_Container ${picOpen3 ? "show" : "hide"}`}>
      <div className="pictureModal_Picture"
        style={{
        backgroundImage: "url("+require("../../assets/img/photo/"+project.image3)+")" }}
        onClick={() => {
          setPicOpen3(false);
          setShader(false);
          setTitleOpen3(false);
        }}/>
    </div>

    <div className="pictureModal_PictureDescription font_normal"
      style ={{opacity: `${titleOpen3 ? "1" : "0"}`}}>
      {project.image3_descr}
    </div>

  </div>
  );
};

export default PictureModal;