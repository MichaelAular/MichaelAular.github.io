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
      return window.innerWidth < 750 ? 3
        : window.innerWidth < 1000 ? 4
        : window.innerWidth < 1400 ? 5
        : 6;
    }
    function setLaneItemWidth() {
      return window.innerWidth < 750 ? 24
        : window.innerWidth < 1000 ? 19
        : window.innerWidth < 1400 ? 15.6
        : 13.3;
    }
    function setLaneItemHeight() {
      return window.innerWidth < 750 ? 12.5
        : window.innerWidth < 1000 ? 10
        : window.innerWidth < 1400 ? 8.3
        : 6.5;
    }

    function setIndicatorWidth() {
     return window.innerWidth < 750 ? 0.5
        : window.innerWidth < 1000 ? 0.5
        : window.innerWidth < 1400 ? 0.5
        : 0.45;
    }

      function handleResize() {
      setWindowSize({
        length: setLaneLength(),
        itemWidth: setLaneItemWidth(),
        itemHeight: setLaneItemHeight(),
        indicatorWidth: setIndicatorWidth(),
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export default useWindowSize;
