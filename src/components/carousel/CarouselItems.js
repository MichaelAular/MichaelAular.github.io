import "./carousel.scss";
import Thumbnail from "../Thumbnail/thumbnail";

const CarouselItems = ({
  projects,
  projectLength,
  size,
  activeIndex,
  setDisplayedProject,
  setShader,
  }) => {

  const trueLane =
    projects &&
    projects.map((projects, index) => {
      return (
        <Thumbnail
          key={projects.id}
          project={projects}
          projectLength={projectLength}
          size={size}
          activeIndex={activeIndex}
          index={index}
          setDisplayedProject={setDisplayedProject}
          setShader={setShader}
        />
      );
    });


  let lastLane = [];
  for (let i = 0; i <= size.length; i++) {
    lastLane.push(trueLane[0 + i]);
  }

  let firstLane = [];
  for (let i = 1; i <= size.length + 1; i++) {
    firstLane.unshift(trueLane[trueLane.length - i]);
  }


  return (
    <div className="carouselItemContainer">
      <div className="carouselItem">
        {firstLane}
        {trueLane}
        {lastLane}
      </div>
    </div>
  );
};

export default CarouselItems;
