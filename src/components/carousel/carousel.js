import React, { useState } from "react";
import "./carousel.scss";
import ArrowLeft from "../../assets/icons/arrowLeft";
import useWindowSize from "../../hooks/windowsize";
import CarouselItems from "./CarouselItems";
import ArrowLeftRight from "../../assets/icons/arrowLeftRight";
import CurvedArrowDown from "../../assets/icons/curverdArrowDown";

const Carousel = ({ projects, setShader, shader, setDisplayedProject }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startTrigger, setStarttrigger] = useState(false);
  const [animationState, setAnimationState] = useState(false);
  const [clickable, setClickable] = useState(true);
  const size = useWindowSize();
  const projectLength = Object.keys(projects).length;
  const fullLaneLength = projectLength + size.length * 2;
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  const switchClickableOn = () => {
    setClickable(true);
  };
  const switchClickableOff = () => {
    setClickable(false);
  };

  const updateIndexNext = async (newIndex) => {
    switchClickableOff();
    setAnimationState(true);
    setStarttrigger(true);
    setActiveIndex(newIndex);
    await sleep(800);
    switchClickableOn();
    checkIndexNext(newIndex);
  };

  const updateIndexPrev = async (newIndex) => {
    switchClickableOff();
    setAnimationState(true);
    setActiveIndex(newIndex);
    await sleep(800);
    switchClickableOn();
    checkIndexPrev(newIndex);
  };

  const checkIndexNext = (newIndex) => {
    if (newIndex > fullLaneLength - size.length - 1) {
      setAnimationState(false);
      setActiveIndex(size.length * 2 - (fullLaneLength - newIndex));
    }
  };

  const checkIndexPrev = (activeIndex) => {
    if (activeIndex < size.length + 1) {
      setAnimationState(false);
      setActiveIndex(fullLaneLength - size.length * 2 + activeIndex);
    }
  };

  var styleIndicatorcontainer = {
    height: `${size.itemHeight + 2}vw`,
    width: `${size.itemWidth * size.indicatorWidth}vw`,
  };

  return (
    <div className="carouselContainer">
      <div
        className="carousel"
        style={{
          height: `${size.itemHeight}vw`,
          bottom: 0,
        }}
      >

        <div className="carouselDoodleContainer" style={{
          width: `${size.itemWidth*.45}vw`,
          height: `${size.itemHeight}vw`,
          transform:`translateY(-${size.itemHeight}vw)`,
          marginLeft: `calc(100vw - ${size.itemWidth * .5}vw)`
        }}>
        <div className="leftRight"><ArrowLeftRight/></div>
        <div className="doodleText font_marker">lane you can move left & right!</div>
        <div className="curvedArrowDown"><CurvedArrowDown/></div>

        </div>

        <div
          className="carouselBackBlock"
          style={{ height: `${size.itemHeight + 2}vw` }}/>
        <div
          className="carouselLane"
          style={{
            transform: `translateX(-${activeIndex * (size.itemWidth + 1.3)}vw)`,
            transition: `${animationState ? " transform 0.7s" : "undefined"}`,
            paddingLeft: `${`${size.itemWidth * 0.5 - 0.5}vw`}`,
            height: `${size.itemHeight}vw`,

          }}
        >
          <CarouselItems
            className="carouselItemInCarousel"
            projects={projects}
            projectLength={projectLength}
            startTrigger={startTrigger}
            size={size}
            activeIndex={activeIndex}
            setShader={setShader}
            shader={shader}
            setDisplayedProject={setDisplayedProject}
          />
        </div>
        <div className="indicators" style={{ top: "15vw" }}>
          {startTrigger && (
            <button
              className="prevButton indicatorContainer"
              style={styleIndicatorcontainer}
              onClick={() => {
                clickable
                  ? updateIndexPrev(activeIndex - size.length)
                  : console.log(null);
              }}
            >
              <div className="arrowContainer arrowLeft"
              style={{
                height: `${size.itemHeight}vw`,
                width: `${size.itemHeight * 0.5}vw`,
              }}>
                <ArrowLeft className="indicatorArrow"/>
              </div>
            </button>
          )}

          <button
            className="nextButton indicatorContainer"
            style={styleIndicatorcontainer}
            onClick={() => {
              clickable
                ? updateIndexNext(activeIndex + size.length)
                : console.log(null);
            }}
          >
            <div
              className="arrowContainer arrowright"
              style={{
                height: `${size.itemHeight}vw`,
                width: `${size.itemHeight * 0.5}vw`,
                transform:  `rotate(180deg) translateX(-${size.itemWidth *.16}vw)`
              }}
            >
              <ArrowLeft className="indicatorArrow"/>
            </div>
           </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
