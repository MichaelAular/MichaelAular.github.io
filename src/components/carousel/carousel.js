import React, { useState } from "react";
import "./carousel.scss";
import ArrowLeft from "../../assets/icons/arrowLeft";
import useWindowSize from "../../hooks/windowsize";
import CarouselItems from "./CarouselItems";
import ArrowLeftRight from "../../assets/icons/arrowLeftRight";
import CurvedArrowDown from "../../assets/icons/curverdArrowDown";

const Carousel = ({
  projects,
  setShader,
  shader,
  setDisplayedProject,
  carouselUp,
  setCarouselUp,
}) => {
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
    if (newIndex > fullLaneLength - size.length * 2) {
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

  return (
    <div className="carouselContainer">
      <div
        className="showAndHideButton"
        style={{
          bottom: `${carouselUp ? `calc(${size.itemHeight}vw + 40px)` : `10px`}`,
        }}
        onClick={() => {
          setCarouselUp(!carouselUp);
        }}
      >
        <div
          className="showhideArrow"
          style={{
            rotate: `${carouselUp ? "-90deg" : "90deg"}`,
            transitionDuration: ".5s",
          }}
        >
          <ArrowLeft />
        </div>
      </div>
      <div
        className="smallBlock"
        style={{
          bottom: `${carouselUp ? `calc(${size.itemHeight}vw + 25px)` : `-5px`}`,
        }}
      />

      <div
        className="carousel"
        style={{
          height: `${size.itemHeight}vw`,
          bottom: `${carouselUp ? `1vh` : `calc(${-size.itemHeight}vw - 20px`}`,
          transitionDuration: ".5s",
        }}
        onMouseLeave={() => {
          setShader(false);
        }}
        onMouseEnter={() => {
          setShader(true);
        }}
      >
        <div
          className="carouselText font_marker"
          style={{
            marginLeft: `calc(${size.itemWidth * 0.15}vw)`,
            marginTop: "-2.6vw",
            zIndex: 1,
          }}
        >
          You can find other <br />
          Projects <i>right</i>
          <br />
          HERE!{" "}
        </div>

        <div
          className="carouselDoodleContainer"
          style={{
            width: `${size.itemWidth * 0.45}vw`,
            height: `${size.itemHeight}vw`,
            transform: `translateY(-${size.itemHeight}vw)`,
            marginLeft: `calc(100vw - ${size.itemWidth * 0.5}vw)`,
          }}
        >
          <div className="leftRight">
            <ArrowLeftRight />
          </div>
          <div className="doodleText font_marker">
            lane you can move left & right!
          </div>
          <div className="curvedArrowDown">
            <CurvedArrowDown />
          </div>
        </div>

        <div
          className={`carouselBackBlock ${
            !shader ? "removeCarouselShader" : ""
          }`}
          style={{
            height: `calc(${size.itemHeight}vw + 32px)`,
            backgroundColor: `${
              shader ? "var(--darkCarousel)" : "var(--tonecolor)"
            }`,
          }}
        />
        <div
          className="carouselLane"
          style={{
            transform: `translateX(-${activeIndex * (size.itemWidth + 1.3)}vw)`,
            transition: `${
              animationState && "transform 0." + size.length + "s"
            }`,
            paddingLeft: `${`${size.itemWidth * 0.5}vw`}`,
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
              style={{
                height: `calc(${size.itemHeight}vw + 32px)`,
                width: `${size.itemWidth * 0.5}vw`,
                left: `-.3vw`,
              }}
              onClick={() => {
                clickable && updateIndexPrev(activeIndex - size.length);
              }}
              onMouseLeave={() => {
                setShader(false);
              }}
              onMouseEnter={() => {
                setShader(true);
              }}
            >
              <div
                className="arrowContainer arrowLeft"
                style={{
                  height: `${size.itemHeight}vw`,
                  width: `${size.itemHeight * 0.5}vw`,
                }}
              >
                <ArrowLeft className="indicatorArrow" />
              </div>
            </button>
          )}

          <button
            className="nextButton indicatorContainer"
            style={{
              height: `calc(${size.itemHeight}vw + 32px)`,
              width: `${size.itemWidth * 0.5 + (6 - size.length) * 0.2}vw`,
              right: `-.7vw`,
            }}
            onClick={() => {
              clickable && updateIndexNext(activeIndex + size.length);
            }}
            onMouseLeave={() => {
              setShader(false);
            }}
            onMouseEnter={() => {
              setShader(true);
            }}
          >
            <div
              className="arrowContainer arrowright"
              style={{
                height: `${size.itemHeight}vw`,
                width: `${size.itemHeight * 0.5}vw`,
                transform: `rotate(180deg) translateX(-${
                  size.itemWidth * 0.16
                }vw)`,
              }}
            >
              <ArrowLeft className="indicatorArrow" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
