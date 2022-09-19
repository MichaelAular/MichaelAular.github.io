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
      const leftIndex = (projectLength - size.length + activeIndex - 1) % projectLength;
      const rightIndex = leftIndex + size.length - 1;
      const rightIndexLastPage = leftIndex + (size.length - 1) - projectLength;

      return (
        <Thumbnail
          key={projects.id}
          project={projects}
          size={size}
          activeIndex={activeIndex}
          index={index}
          leftIndex={leftIndex}yyyy
          rightIndex={
            leftIndex + (size.length - 1) > projectLength
              ? rightIndexLastPage
              : rightIndex
          }
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
