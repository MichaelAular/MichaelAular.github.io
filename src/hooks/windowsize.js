import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    length: "",
    itemWidth: "",
    itemHeight: "",
    pictureModalPosition: "",
    pictureWidth: "",
    pictureHeight: "",
    blockWidthBig: "",
    blockWidthMobal: "",
  });
  useEffect(() => {
    function setLaneLength() {
      return window.innerWidth < 600
        ? 1
        : window.innerWidth < 800
        ? 2
        : window.innerWidth < 1000
        ? 3
        : window.innerWidth < 1400
        ? 4
        : window.innerWidth < 1800
        ? 5
        : 6;
    }
    function setLaneItemWidth() {
      return window.innerWidth < 600
        ? 49
        : window.innerWidth < 800
        ? 32.33
        : window.innerWidth < 1000
        ? 24
        : window.innerWidth < 1400
        ? 19
        : window.innerWidth < 1800
        ? 15.6
        : 13.28;
    }
    function setLaneItemHeight() {
      return window.innerWidth < 600
        ? 26.95
        : window.innerWidth < 800
        ? 17.78
        : window.innerWidth < 1000
        ? 13.2
        : window.innerWidth < 1400
        ? 10.45
        : window.innerWidth < 1800
        ? 8.58
        : 7.3;
    }
    function setPictureWidth() {
      return window.innerWidth < 1000
        ? 24
        : window.innerWidth < 1400
        ? 19
        : window.innerWidth < 1800
        ? 15.6
        : 13.3;
    }
    function setPictureModalPosition() {
      return window.innerWidth < 1000
        ? 10
        : window.innerWidth < 1400
        ? 6
        : window.innerWidth < 1800
        ? 5
        : 2.75;
    }
    function setBlockRightWidth() {
      return window.innerWidth < 1000
        ? 10
        : window.innerWidth < 1400
        ? 73.65
        : window.innerWidth < 1800
        ? 76.8
        : 80.4;
    }
    function setBlockWidthBig() {
      return window.innerWidth < 1400 ? false : true;
    }
    function setBlockWidthMobal() {
      return window.innerWidth > 600 ? false : true;
    }

    function handleResize() {
      setWindowSize({
        length: setLaneLength(),
        itemWidth: setLaneItemWidth(),
        itemHeight: setLaneItemHeight(),
        pictureWidth: setPictureWidth(),
        pictureModalPosition: setPictureModalPosition(),
        blockRightWidth: setBlockRightWidth(),
        blockWidthBig: setBlockWidthBig(),
        blockWidthMobal: setBlockWidthMobal(),
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export default useWindowSize;
