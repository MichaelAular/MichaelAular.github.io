import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    length: "",
    itemWidth: "",
    itemHeight: "",
    indicatorWidth: "",
    modalDistance: "",
  });
  useEffect(() => {
    function setLaneLength() {
      return window.innerWidth < 1000 ? 3
        : window.innerWidth < 1400 ? 4
        : window.innerWidth < 1800 ? 5
        : 6;
    }
    function setLaneItemWidth() {
      return window.innerWidth < 1000 ? 24
        : window.innerWidth < 1400 ? 19
        : window.innerWidth < 1800 ? 15.6
        : 13.3;
    }
    function setLaneItemHeight() {
      return window.innerWidth < 1000 ? 12.5
        : window.innerWidth < 1400 ? 10
        : window.innerWidth < 1800 ? 8.3
        : 6.5;
    }

    function setIndicatorWidth() {
     return window.innerWidth < 1000 ? 0.5
        : window.innerWidth < 1400 ? 0.5
        : window.innerWidth < 1800 ? 0.5
        : 0.45;
    }

    function setPictureWidth() {
      return window.innerWidth < 1000 ? 24
         : window.innerWidth < 1400 ? 19
         : window.innerWidth < 1800 ? 15.6
         : 13.3;
     }

     function setPictureHeight() {
      return window.innerWidth < 1000 ? 7
         : window.innerWidth < 1400 ? 7
         : window.innerWidth < 1800 ? 7
         : 7;
     }

      function handleResize() {
      setWindowSize({
        length: setLaneLength(),
        itemWidth: setLaneItemWidth(),
        itemHeight: setLaneItemHeight(),
        indicatorWidth: setIndicatorWidth(),
        pictureWidth: setPictureWidth(),
        pictureHeight: setPictureHeight()
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export default useWindowSize;
