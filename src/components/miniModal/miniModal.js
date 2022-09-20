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
  if (window.innerWidth<=600) {
    return null;
  }

  const dots = () => {
    if (`${projectDescription.length}` > 360) {
      return "...";
    }
  };

 

  const modPos = () => {
    let leftPos = (activeIndex + (6 -size.length));
    console.log("leftPos: ", leftPos)
    if (leftPos > 6) {
      leftPos = leftPos - 7
    }

    let rightPos = activeIndex + 5;
    if (rightPos > 6) {
      rightPos = rightPos - 7
    }

    if (index === leftPos) return "modal-container_left";
    if (index === rightPos) return "modal-container_right";
    else return "modal-container";
  };

  return (
    <div
    className={modPos()}
    style={{ width: size.itemWidth * 1.2 + "vw" }}>
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
        <div
        className="modal-title typewriter font_bangers">
          {projectTitle}
        </div>

        <div
          className="modal-project-description">
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
