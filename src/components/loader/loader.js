import "./loader.scss";

const Loader = ({ imgsLoaded }) => {

  const spinnerClassName =()=> {
      if (imgsLoaded === true) return "spinner spinnerAnimation";
      if (imgsLoaded === false) return "spinner spinnerAnimationInf";
    };

    const overlayClassName =()=> {
        if (imgsLoaded === true) return "spinnerOverlay overlayAnimation";
        if (imgsLoaded === false) return "spinnerOverlay overlayAnimationInf";
      };

      const loaderButton =()=> {
        if (imgsLoaded === true) return "loaderButton loaderButtonAnimation";
        if (imgsLoaded === false) return "loaderButton";
      };

  return (
    <div className={"loader"}>

        <div className={spinnerClassName()}>
        <div className={overlayClassName()}/>
            <div className={loaderButton()}>
                <span className="font_normal bigFont">SKIP</span>
            </div>
        </div>

    </div>
  );
};
export default Loader;
