import React, { useState } from "react";
import "./carousel.scss";
import ArrowLeft from "../../assets/icons/arrowLeft";
import useWindowSize from "../../hooks/windowsize";
import CarouselItems from "./CarouselItems";
import ArrowLeftRight from "../../assets/icons/arrowLeftRight";
import CurvedArrowDown from "../../assets/icons/curverdArrowDown";
import HideShowButton from "../buttons/hideshowCarouselButton/hideshow";

const Carousel = ({
  projects,
  setShader,
  shader,
  setDisplayedProject,
  carouselUp,
  setCarouselUp,
}) => {
  const size = useWindowSize();
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationState, setAnimationState] = useState(false);
  const [clickable, setClickable] = useState(true);
  const [firstRunDone, setFirstRunDone] = useState(false);
  const projectLength = Object.keys(projects).length;
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const checkIndexNext = async (activeIndex) => {
    await sleep(800);
    if (activeIndex > projectLength) {
      setAnimationState(false);
      setActiveIndex( activeIndex - projectLength);
    }
    setClickable(true);
  };
  const checkIndexPrev = async (activeIndex) => {
    await sleep(800);
    if (activeIndex < size.length  +1 ) {
      setAnimationState(false);
      setActiveIndex( projectLength  + activeIndex)
    }
    setClickable(true);
  };
  const updateIndexNext = (newIndex) => {
    setFirstRunDone(true);
    setClickable(false);
    setActiveIndex(newIndex);
    checkIndexNext(newIndex);
    setAnimationState(true);
  };

  const updateIndexPrev = (newIndex) => {
    setClickable(false);
    setActiveIndex(newIndex);
    checkIndexPrev(newIndex);
    setAnimationState(true);
  };

  return (
    <div className="carouselContainer">
      <div
        className="carousel"
        style={{
          height: `${size.itemHeight}vw`,
          bottom: `${carouselUp ? `0` : `calc(${-size.itemHeight}vw - 20px`}`,
          transitionDuration: ".5s",
        }}
      >
        <HideShowButton carouselUp={carouselUp} setCarouselUp={setCarouselUp} />
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
              shader ? "var(--darkCarousel)" : "var(--element)"
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
            size={size}
            activeIndex={activeIndex}
            setShader={setShader}
            shader={shader}
            setDisplayedProject={setDisplayedProject}
          />
        </div>
        <div className="indicators">
          <button
            className="prevButton indicatorContainer"
            style={{
              height: `calc(${size.itemHeight}vw + 32px)`,
              width: `${size.itemWidth * 0.5}vw`,
              opacity: !firstRunDone ? "1" : ".8",
            }}
            onClick={() => {
              clickable & firstRunDone &&
                updateIndexPrev(activeIndex - size.length);
            }}
          >
            <div
              className="arrowContainer arrowLeft"
              style={{
                height: `${size.itemHeight}vw`,
                width: `${size.itemHeight * 0.5}vw`,
                opacity: firstRunDone ? `.4` : "0",
              }}
            >
              <ArrowLeft className="indicatorArrow" />
            </div>
          </button>

          <button
            className="nextButton indicatorContainer"
            style={{
              height: `calc(${size.itemHeight}vw + 32px)`,
              width: `${size.itemWidth * 0.5 + (6 - size.length) * 0.2}vw`,
            }}
            onClick={() => {
              clickable && updateIndexNext(activeIndex + size.length);
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
