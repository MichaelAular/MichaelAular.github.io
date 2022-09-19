import "./miniModal.scss";
import MiniModalButton from "../buttons/miniModalButton/miniModalButton";

const MiniModal = ({
  modalState,
  hovered,
  setHovered,
  thumbImage,
  size,
  carouselText,
  projectTitle,
  projectDescription,
  index,
  activeIndex,
  setDisplayedProject,
  setShader,
}) => {
  if (!modalState) {
    return null;
  }
  if (!hovered) {
    return null;
  }

  const dots = () => {
    if (`${projectDescription.length}` > 360) {
      return "...";
    }
  };

  const modPos = () => {
    console.log(index)
    console.log(activeIndex)
    if (index === activeIndex + (6 -size.length)) return "modal-container_left";
    if (index === activeIndex + 5) return "modal-container_right";
    return "modal-container";
  };

  return (
    <div className={modPos()} style={{ width: size.itemWidth * 1.2 + "vw" }}>
      <div
        className="modal-image"
        style={{
          width: size.itemWidth * 1.2 + "vw",
          height: size.itemHeight * 1.2 + "vw",
          backgroundImage:
            "url(" + require("../../assets/img/photo/" + thumbImage) + ")",
        }}
      >
        {carouselText}
      </div>
      <div
        className="modal-content" >
        <div className="modal-title typewriter font_bangers">
          {projectTitle}
        </div>

        <div className="modal-project-description">
          {projectDescription.substring(0, 290)}
          {dots()}
        </div>
        <div
          className="modal-buttonContainer"
          style={{
            width: size.itemWidth + 1.3 + "vw",
            alignContent: "space-between"
          }}
        >
          <MiniModalButton
            size={size}
            setDisplayedProject={setDisplayedProject}
            setShader={setShader}
            setHovered={setHovered}
            index={index}
          />
        </div>
      </div>
    </div>
  );
};

export default MiniModal;
